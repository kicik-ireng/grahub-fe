"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createComplaints } from "@/lib/api/complaints-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    residentId: "",
    category: "",
    title: "",
    description: "",
    assignedTo: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createComplaints(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Complaints" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="residentId" placeholder="Masukkan residentId" required value={formData.residentId || ""} onChange={e => setFormData({...formData, residentId: e.target.value})} />
        <Input label="category" placeholder="Masukkan category" required value={formData.category || ""} onChange={e => setFormData({...formData, category: e.target.value})} />
        <Input label="title" placeholder="Masukkan title" required value={formData.title || ""} onChange={e => setFormData({...formData, title: e.target.value})} />
        <Input label="description" placeholder="Masukkan description" required value={formData.description || ""} onChange={e => setFormData({...formData, description: e.target.value})} />
        <Input label="assignedTo" placeholder="Masukkan assignedTo" value={formData.assignedTo || ""} onChange={e => setFormData({...formData, assignedTo: e.target.value})} />
      </form>
    </Dialog>
  );
}
