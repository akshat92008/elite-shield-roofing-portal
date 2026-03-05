import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { Camera, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectTracking() {
    const [files, setFiles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen to vaultFiles for ROOF_001 tenant
        const q = query(collection(db, 'vaultFiles'), where('clientId', '==', 'u4'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setFiles(docs);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-safety-orange/10 border border-safety-orange/20 mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-safety-orange animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-safety-orange">Live Project Hub</span>
                    </div>
                    <h2 className="text-4xl font-black mb-4">Real-Time Drone Inspection</h2>
                    <p className="text-charcoal/60 max-w-2xl mx-auto">
                        Our autonomous drone fleet provides instant progress updates.
                        Track your installation with high-resolution 2026 optics.
                    </p>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-safety-orange border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-charcoal/40 font-medium">Connecting to Drone Stream...</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {files.map((file, idx) => (
                                <motion.div
                                    key={file.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative bg-slate-grey rounded-3xl overflow-hidden border border-charcoal/5 hover:border-safety-orange/30 transition-all shadow-lg hover:shadow-safety-orange/5"
                                >
                                    <div className="aspect-video bg-charcoal/10 relative overflow-hidden">
                                        <img
                                            src={file.url || `https://picsum.photos/seed/${file.id}/800/450`}
                                            alt={file.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-charcoal/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                                            <Camera className="w-3 h-3 text-safety-orange" />
                                            Drone Capture
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-bold text-lg group-hover:text-safety-orange transition-colors">{file.name}</h3>
                                            <span className="text-[10px] font-black bg-charcoal/5 px-2 py-1 rounded-md text-charcoal/40">{file.type}</span>
                                        </div>
                                        <div className="flex items-center gap-6 text-sm text-charcoal/60">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-safety-orange" />
                                                {file.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                {file.status}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {files.length === 0 && (
                            <div className="col-span-full py-20 text-center bg-slate-grey/50 rounded-3xl border-2 border-dashed border-charcoal/10">
                                <Camera className="w-12 h-12 text-charcoal/20 mx-auto mb-4" />
                                <p className="text-charcoal/40 font-medium">No drone photos uploaded for this session yet.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
