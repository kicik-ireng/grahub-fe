"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createFamilies } from "@/lib/api/families-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    familyCardNumber: "",
    headResidentId: "",
    address: "",
    rtId: "",
    rwId: "",
    kelurahanId: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createFamilies(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Families" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="familyCardNumber" placeholder="Masukkan familyCardNumber" required value={formData.familyCardNumber || ""} onChange={e => setFormData({...formData, familyCardNumber: e.target.value})} />
        <Input label="headResidentId" placeholder="Masukkan headResidentId" value={formData.headResidentId || ""} onChange={e => setFormData({...formData, headResidentId: e.target.value})} />
        <Input label="address" placeholder="Masukkan address" required value={formData.address || ""} onChange={e => setFormData({...formData, address: e.target.value})} />
        <Input label="rtId" placeholder="Masukkan rtId" required value={formData.rtId || ""} onChange={e => setFormData({...formData, rtId: e.target.value})} />
        <Input label="rwId" placeholder="Masukkan rwId" required value={formData.rwId || ""} onChange={e => setFormData({...formData, rwId: e.target.value})} />
        <Input label="kelurahanId" placeholder="Masukkan kelurahanId" required value={formData.kelurahanId || ""} onChange={e => setFormData({...formData, kelurahanId: e.target.value})} />
      </form>
    </Dialog>
  );
}
