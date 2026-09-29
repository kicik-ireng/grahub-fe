"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createNotifications } from "@/lib/api/notifications-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    userId: "",
    title: "",
    content: "",
    type: "",
    isRead: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createNotifications(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Notifications" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="userId" placeholder="Masukkan userId" value={formData.userId || ""} onChange={e => setFormData({...formData, userId: e.target.value})} />
        <Input label="title" placeholder="Masukkan title" required value={formData.title || ""} onChange={e => setFormData({...formData, title: e.target.value})} />
        <Input label="content" placeholder="Masukkan content" required value={formData.content || ""} onChange={e => setFormData({...formData, content: e.target.value})} />
        <Input label="type" placeholder="Masukkan type" required value={formData.type || ""} onChange={e => setFormData({...formData, type: e.target.value})} />
        <Input label="isRead" placeholder="Masukkan isRead" required value={formData.isRead || ""} onChange={e => setFormData({...formData, isRead: e.target.value})} />
      </form>
    </Dialog>
  );
}
