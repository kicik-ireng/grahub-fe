"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createResidentMutations } from "@/lib/api/resident-mutations-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    residentId: "",
    date: "",
    reason: "",
    fromRtId: "",
    toRtId: "",
    fromRwId: "",
    toRwId: "",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createResidentMutations(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Resident Mutations" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="residentId" placeholder="Masukkan residentId" required value={formData.residentId || ""} onChange={e => setFormData({...formData, residentId: e.target.value})} />
        <Input label="date" placeholder="Masukkan date" required value={formData.date || ""} onChange={e => setFormData({...formData, date: e.target.value})} />
        <Input label="reason" placeholder="Masukkan reason" value={formData.reason || ""} onChange={e => setFormData({...formData, reason: e.target.value})} />
        <Input label="fromRtId" placeholder="Masukkan fromRtId" value={formData.fromRtId || ""} onChange={e => setFormData({...formData, fromRtId: e.target.value})} />
        <Input label="toRtId" placeholder="Masukkan toRtId" value={formData.toRtId || ""} onChange={e => setFormData({...formData, toRtId: e.target.value})} />
        <Input label="fromRwId" placeholder="Masukkan fromRwId" value={formData.fromRwId || ""} onChange={e => setFormData({...formData, fromRwId: e.target.value})} />
        <Input label="toRwId" placeholder="Masukkan toRwId" value={formData.toRwId || ""} onChange={e => setFormData({...formData, toRwId: e.target.value})} />
        <Input label="notes" placeholder="Masukkan notes" value={formData.notes || ""} onChange={e => setFormData({...formData, notes: e.target.value})} />
      </form>
    </Dialog>
  );
}
