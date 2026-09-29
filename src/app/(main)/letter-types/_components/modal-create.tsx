"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLetterTypes } from "@/lib/api/letter-types-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    code: "",
    name: "",
    category: "",
    description: "",
    requiresRtApproval: "",
    requiresRwApproval: "",
    requiresKelurahanApproval: "",
    requiresSignature: "",
    requiresAttachment: "",
    isActive: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createLetterTypes(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Letter Types" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="code" placeholder="Masukkan code" required value={formData.code || ""} onChange={e => setFormData({...formData, code: e.target.value})} />
        <Input label="name" placeholder="Masukkan name" required value={formData.name || ""} onChange={e => setFormData({...formData, name: e.target.value})} />
        <Input label="category" placeholder="Masukkan category" required value={formData.category || ""} onChange={e => setFormData({...formData, category: e.target.value})} />
        <Input label="description" placeholder="Masukkan description" value={formData.description || ""} onChange={e => setFormData({...formData, description: e.target.value})} />
        <Input label="requiresRtApproval" placeholder="Masukkan requiresRtApproval" required value={formData.requiresRtApproval || ""} onChange={e => setFormData({...formData, requiresRtApproval: e.target.value})} />
        <Input label="requiresRwApproval" placeholder="Masukkan requiresRwApproval" required value={formData.requiresRwApproval || ""} onChange={e => setFormData({...formData, requiresRwApproval: e.target.value})} />
        <Input label="requiresKelurahanApproval" placeholder="Masukkan requiresKelurahanApproval" required value={formData.requiresKelurahanApproval || ""} onChange={e => setFormData({...formData, requiresKelurahanApproval: e.target.value})} />
        <Input label="requiresSignature" placeholder="Masukkan requiresSignature" required value={formData.requiresSignature || ""} onChange={e => setFormData({...formData, requiresSignature: e.target.value})} />
        <Input label="requiresAttachment" placeholder="Masukkan requiresAttachment" required value={formData.requiresAttachment || ""} onChange={e => setFormData({...formData, requiresAttachment: e.target.value})} />
        <Input label="isActive" placeholder="Masukkan isActive" required value={formData.isActive || ""} onChange={e => setFormData({...formData, isActive: e.target.value})} />
      </form>
    </Dialog>
  );
}
