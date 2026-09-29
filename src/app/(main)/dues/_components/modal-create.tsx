"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createDues } from "@/lib/api/dues-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    title: "",
    description: "",
    amount: "",
    dueDate: "",
    residentId: "",
    familyId: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createDues(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Dues" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="title" placeholder="Masukkan title" required value={formData.title || ""} onChange={e => setFormData({...formData, title: e.target.value})} />
        <Input label="description" placeholder="Masukkan description" value={formData.description || ""} onChange={e => setFormData({...formData, description: e.target.value})} />
        <Input label="amount" placeholder="Masukkan amount" required value={formData.amount || ""} onChange={e => setFormData({...formData, amount: e.target.value})} />
        <Input label="dueDate" placeholder="Masukkan dueDate" required value={formData.dueDate || ""} onChange={e => setFormData({...formData, dueDate: e.target.value})} />
        <Input label="residentId" placeholder="Masukkan residentId" value={formData.residentId || ""} onChange={e => setFormData({...formData, residentId: e.target.value})} />
        <Input label="familyId" placeholder="Masukkan familyId" value={formData.familyId || ""} onChange={e => setFormData({...formData, familyId: e.target.value})} />
      </form>
    </Dialog>
  );
}
