"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFacilities } from "@/lib/api/facilities-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    description: "",
    location: "",
    condition: "",
    isActive: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createFacilities(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Facilities" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="name" placeholder="Masukkan name" required value={formData.name || ""} onChange={e => setFormData({...formData, name: e.target.value})} />
        <Input label="description" placeholder="Masukkan description" value={formData.description || ""} onChange={e => setFormData({...formData, description: e.target.value})} />
        <Input label="location" placeholder="Masukkan location" required value={formData.location || ""} onChange={e => setFormData({...formData, location: e.target.value})} />
        <Input label="condition" placeholder="Masukkan condition" required value={formData.condition || ""} onChange={e => setFormData({...formData, condition: e.target.value})} />
        <Input label="isActive" placeholder="Masukkan isActive" required value={formData.isActive || ""} onChange={e => setFormData({...formData, isActive: e.target.value})} />
      </form>
    </Dialog>
  );
}
