"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAnnouncements } from "@/lib/api/announcements-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    title: "",
    content: "",
    targetScope: "",
    priority: "",
    publishDate: "",
    expiryDate: "",
    imageUrl: "",
    attachmentUrl: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createAnnouncements(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Announcements" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="title" placeholder="Masukkan title" required value={formData.title || ""} onChange={e => setFormData({...formData, title: e.target.value})} />
        <Input label="content" placeholder="Masukkan content" required value={formData.content || ""} onChange={e => setFormData({...formData, content: e.target.value})} />
        <Input label="targetScope" placeholder="Masukkan targetScope" required value={formData.targetScope || ""} onChange={e => setFormData({...formData, targetScope: e.target.value})} />
        <Input label="priority" placeholder="Masukkan priority" required value={formData.priority || ""} onChange={e => setFormData({...formData, priority: e.target.value})} />
        <Input label="publishDate" placeholder="Masukkan publishDate" required value={formData.publishDate || ""} onChange={e => setFormData({...formData, publishDate: e.target.value})} />
        <Input label="expiryDate" placeholder="Masukkan expiryDate" value={formData.expiryDate || ""} onChange={e => setFormData({...formData, expiryDate: e.target.value})} />
        <Input label="imageUrl" placeholder="Masukkan imageUrl" value={formData.imageUrl || ""} onChange={e => setFormData({...formData, imageUrl: e.target.value})} />
        <Input label="attachmentUrl" placeholder="Masukkan attachmentUrl" value={formData.attachmentUrl || ""} onChange={e => setFormData({...formData, attachmentUrl: e.target.value})} />
      </form>
    </Dialog>
  );
}
