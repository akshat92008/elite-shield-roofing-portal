import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

export function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Log as a Conversation
        const conversationPromise = addDoc(collection(db, 'conversations'), {
            clientId: 'u4', // Elite Shield Roofing client ID
            contactName: formData.name,
            email: formData.email,
            channel: 'email',
            unread: true,
            avatar: formData.name.charAt(0).toUpperCase(),
            tenantId: 'ROOF_001',
            updatedAt: serverTimestamp(),
            messages: [
                {
                    id: Date.now().toString(),
                    text: formData.message,
                    time: new Date().toLocaleTimeString(),
                    sender: 'contact'
                }
            ]
        });

        // Log as a Lead in the CRM Pipeline
        const leadPromise = addDoc(collection(db, 'leads'), {
            clientId: 'u4',
            tenantId: 'ROOF_001',
            name: formData.name,
            email: formData.email,
            message: formData.message,
            status: 'New',
            estimatedValue: 0, // Placeholder until qualified
            createdAt: serverTimestamp()
        });

        Promise.all([conversationPromise, leadPromise]).catch(error => {
            console.error("Error sending message:", error);
        });

        // Optimistic UI updates
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <div className="bg-white border border-charcoal/10 p-8 rounded-3xl shadow-sm">
            {isSuccess ? (
                <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-charcoal/60 mb-6">Our admin portal has been notified and we'll get back to you soon.</p>
                    <Button onClick={() => setIsSuccess(false)}>Send Another</Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-charcoal/50">Your Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-slate-grey/50 border border-charcoal/10 rounded-xl px-4 py-3 outline-none focus:border-safety-orange transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-charcoal/50">Email Address</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-slate-grey/50 border border-charcoal/10 rounded-xl px-4 py-3 outline-none focus:border-safety-orange transition-colors"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-charcoal/50">Message</label>
                        <textarea
                            rows={4}
                            required
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-slate-grey/50 border border-charcoal/10 rounded-xl px-4 py-3 outline-none focus:border-safety-orange transition-colors resize-none"
                        ></textarea>
                    </div>
                    <Button type="submit" className="w-full h-14 text-lg" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 w-4 h-4" />
                    </Button>
                </form>
            )}
        </div>
    );
}
