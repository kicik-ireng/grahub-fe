"use client";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createAuditLogs } from "@/lib/api/audit-logs-api";

export default function ModalCreate({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    userId: "",
    action: "",
    module: "",
    entity: "",
    entityId: "",
    before: "",
    after: "",
    ipAddress: "",
    userAgent: "",
    requestId: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createAuditLogs(formData);
      onClose();
    } catch (error) {
      console.error("Error creating data", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Tambah Audit Logs" footer={
      <>
        <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Batal</Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>Simpan</Button>
      </>
    }>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input label="userId" placeholder="Masukkan userId" value={formData.userId || ""} onChange={e => setFormData({...formData, userId: e.target.value})} />
        <Input label="action" placeholder="Masukkan action" required value={formData.action || ""} onChange={e => setFormData({...formData, action: e.target.value})} />
        <Input label="module" placeholder="Masukkan module" required value={formData.module || ""} onChange={e => setFormData({...formData, module: e.target.value})} />
        <Input label="entity" placeholder="Masukkan entity" required value={formData.entity || ""} onChange={e => setFormData({...formData, entity: e.target.value})} />
        <Input label="entityId" placeholder="Masukkan entityId" value={formData.entityId || ""} onChange={e => setFormData({...formData, entityId: e.target.value})} />
        <Input label="before" placeholder="Masukkan before" value={formData.before || ""} onChange={e => setFormData({...formData, before: e.target.value})} />
        <Input label="after" placeholder="Masukkan after" value={formData.after || ""} onChange={e => setFormData({...formData, after: e.target.value})} />
        <Input label="ipAddress" placeholder="Masukkan ipAddress" value={formData.ipAddress || ""} onChange={e => setFormData({...formData, ipAddress: e.target.value})} />
        <Input label="userAgent" placeholder="Masukkan userAgent" value={formData.userAgent || ""} onChange={e => setFormData({...formData, userAgent: e.target.value})} />
        <Input label="requestId" placeholder="Masukkan requestId" value={formData.requestId || ""} onChange={e => setFormData({...formData, requestId: e.target.value})} />
      </form>
    </Dialog>
  );
}
