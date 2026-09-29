"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createBirths } from "@/lib/api/births-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    reporterId: "",
    bornResidentId: "",
    date: "",
    place: "",
    notes: "",
    attachmentUrl: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createBirths(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Births" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="reporterId" placeholder="Masukkan reporterId" required value={formData.reporterId || ""} onChange={e => setFormData({...formData, reporterId: e.target.value})} />
        <Input label="bornResidentId" placeholder="Masukkan bornResidentId" value={formData.bornResidentId || ""} onChange={e => setFormData({...formData, bornResidentId: e.target.value})} />
        <Input label="date" placeholder="Masukkan date" required value={formData.date || ""} onChange={e => setFormData({...formData, date: e.target.value})} />
        <Input label="place" placeholder="Masukkan place" required value={formData.place || ""} onChange={e => setFormData({...formData, place: e.target.value})} />
        <Input label="notes" placeholder="Masukkan notes" value={formData.notes || ""} onChange={e => setFormData({...formData, notes: e.target.value})} />
        <Input label="attachmentUrl" placeholder="Masukkan attachmentUrl" value={formData.attachmentUrl || ""} onChange={e => setFormData({...formData, attachmentUrl: e.target.value})} />
      </form>
    </Dialog>
  );
}
