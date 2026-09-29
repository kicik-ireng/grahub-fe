"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPolls } from "@/lib/api/polls-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    isActive: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createPolls(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Polls" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="title" placeholder="Masukkan title" required value={formData.title || ""} onChange={e => setFormData({...formData, title: e.target.value})} />
        <Input label="description" placeholder="Masukkan description" value={formData.description || ""} onChange={e => setFormData({...formData, description: e.target.value})} />
        <Input label="startDate" placeholder="Masukkan startDate" required value={formData.startDate || ""} onChange={e => setFormData({...formData, startDate: e.target.value})} />
        <Input label="endDate" placeholder="Masukkan endDate" required value={formData.endDate || ""} onChange={e => setFormData({...formData, endDate: e.target.value})} />
        <Input label="isActive" placeholder="Masukkan isActive" required value={formData.isActive || ""} onChange={e => setFormData({...formData, isActive: e.target.value})} />
      </form>
    </Dialog>
  );
}
