"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createEmergencyContacts } from "@/lib/api/emergency-contacts-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    category: "",
    phone: "",
    address: "",
    isActive: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createEmergencyContacts(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Emergency Contacts" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="name" placeholder="Masukkan name" required value={formData.name || ""} onChange={e => setFormData({...formData, name: e.target.value})} />
        <Input label="category" placeholder="Masukkan category" required value={formData.category || ""} onChange={e => setFormData({...formData, category: e.target.value})} />
        <Input label="phone" placeholder="Masukkan phone" required value={formData.phone || ""} onChange={e => setFormData({...formData, phone: e.target.value})} />
        <Input label="address" placeholder="Masukkan address" value={formData.address || ""} onChange={e => setFormData({...formData, address: e.target.value})} />
        <Input label="isActive" placeholder="Masukkan isActive" required value={formData.isActive || ""} onChange={e => setFormData({...formData, isActive: e.target.value})} />
      </form>
    </Dialog>
  );
}
