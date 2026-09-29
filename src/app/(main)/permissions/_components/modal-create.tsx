"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPermissions } from "@/lib/api/permissions-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    code: "",
    name: "",
    group: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createPermissions(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Permissions" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="code" placeholder="Masukkan code" required value={formData.code || ""} onChange={e => setFormData({...formData, code: e.target.value})} />
        <Input label="name" placeholder="Masukkan name" required value={formData.name || ""} onChange={e => setFormData({...formData, name: e.target.value})} />
        <Input label="group" placeholder="Masukkan group" required value={formData.group || ""} onChange={e => setFormData({...formData, group: e.target.value})} />
      </form>
    </Dialog>
  );
}
