"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPayments } from "@/lib/api/payments-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    dueId: "",
    residentId: "",
    amount: "",
    method: "",
    proofUrl: "",
    date: "",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createPayments(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Payments" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="dueId" placeholder="Masukkan dueId" required value={formData.dueId || ""} onChange={e => setFormData({...formData, dueId: e.target.value})} />
        <Input label="residentId" placeholder="Masukkan residentId" required value={formData.residentId || ""} onChange={e => setFormData({...formData, residentId: e.target.value})} />
        <Input label="amount" placeholder="Masukkan amount" required value={formData.amount || ""} onChange={e => setFormData({...formData, amount: e.target.value})} />
        <Input label="method" placeholder="Masukkan method" required value={formData.method || ""} onChange={e => setFormData({...formData, method: e.target.value})} />
        <Input label="proofUrl" placeholder="Masukkan proofUrl" value={formData.proofUrl || ""} onChange={e => setFormData({...formData, proofUrl: e.target.value})} />
        <Input label="date" placeholder="Masukkan date" required value={formData.date || ""} onChange={e => setFormData({...formData, date: e.target.value})} />
        <Input label="notes" placeholder="Masukkan notes" value={formData.notes || ""} onChange={e => setFormData({...formData, notes: e.target.value})} />
      </form>
    </Dialog>
  );
}
