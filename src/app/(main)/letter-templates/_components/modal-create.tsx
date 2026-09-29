"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createLetterTemplates } from "@/lib/api/letter-templates-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    letterTypeId: "",
    name: "",
    contentHtml: "",
    version: "",
    isActive: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createLetterTemplates(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Letter Templates" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="letterTypeId" placeholder="Masukkan letterTypeId" required value={formData.letterTypeId || ""} onChange={e => setFormData({...formData, letterTypeId: e.target.value})} />
        <Input label="name" placeholder="Masukkan name" required value={formData.name || ""} onChange={e => setFormData({...formData, name: e.target.value})} />
        <Input label="contentHtml" placeholder="Masukkan contentHtml" required value={formData.contentHtml || ""} onChange={e => setFormData({...formData, contentHtml: e.target.value})} />
        <Input label="version" placeholder="Masukkan version" required value={formData.version || ""} onChange={e => setFormData({...formData, version: e.target.value})} />
        <Input label="isActive" placeholder="Masukkan isActive" required value={formData.isActive || ""} onChange={e => setFormData({...formData, isActive: e.target.value})} />
      </form>
    </Dialog>
  );
}
