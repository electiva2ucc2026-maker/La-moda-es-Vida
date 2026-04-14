import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, UserCheck, MapPin, Phone, Mail, Calendar, AlertCircle, FileText, Upload, CheckCircle2, Download, Trash2, Eye as EyeIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { mockClients, Client, ClientDocument } from "@/lib/mockData";

export default function ClientPortal() {
  const [docType, setDocType] = useState<string>("");
  const [docNumber, setDocNumber] = useState<string>("");
  const [client, setClient] = useState<Client | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [previewDoc, setPreviewDoc] = useState<ClientDocument | null>(null);

  const handleSearch = () => {
    if (!docType || !docNumber) {
      setError("Por favor complete todos los campos.");
      return;
    }

    setIsSearching(true);
    setError(null);
    setClient(null);

    setTimeout(() => {
      const foundClient = mockClients.find(
        (c) => c.documentType === docType && c.documentNumber === docNumber
      );

      if (foundClient) {
        setClient(foundClient);
      } else {
        setError("No se encontró ningún cliente con los datos proporcionados.");
      }
      setIsSearching(false);
    }, 800);
  };

  const handleUpload = (file?: File) => {
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      if (client) {
        const fileUrl = file ? URL.createObjectURL(file) : "https://picsum.photos/seed/doc/800/1100";
        const newDoc: ClientDocument = {
          id: `d${Date.now()}`,
          name: file ? file.name : "Nuevo_Documento.pdf",
          type: file?.type.includes("image") ? "IMAGE" : "PDF",
          uploadDate: new Date().toISOString().split('T')[0],
          url: fileUrl
        };
        setClient({
          ...client,
          documents: [...client.documents, newDoc],
          pendingFields: client.pendingFields.length > 0 ? client.pendingFields.slice(1) : []
        });
      }
      setIsUploading(false);
    }, 1500);
  };

  const handleDelete = (docId: string) => {
    if (client) {
      setClient({
        ...client,
        documents: client.documents.filter(d => d.id !== docId)
      });
    }
  };

  const [isDragging, setIsDragging] = useState(false);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleUpload(files[0]);
    }
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleUpload(e.target.files[0]);
    }
  };

  return (
    <section id="portal" className="py-24 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-brand-emerald mb-4 font-bold">Portal Exclusivo</h2>
          <h3 className="text-4xl font-light text-zinc-900 mb-4 tracking-tight">Gestión de <span className="font-serif italic">Documentación</span></h3>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Consulte su estado y mantenga sus documentos al día para disfrutar de todos nuestros beneficios.
          </p>
        </div>

        <Card className="border-zinc-200 shadow-sm overflow-hidden mb-12">
          <CardHeader className="bg-white border-b border-zinc-100">
            <CardTitle className="text-xl font-medium text-zinc-900">Verificar Identidad</CardTitle>
            <CardDescription>Ingrese sus datos para acceder a su expediente digital.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="space-y-2">
                <Label htmlFor="docType" className="text-xs uppercase tracking-widest text-zinc-500">Tipo de Documento</Label>
                <Select onValueChange={setDocType} value={docType}>
                  <SelectTrigger id="docType" className="border-zinc-200 focus:ring-brand-emerald">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CC">Cédula de Ciudadanía</SelectItem>
                    <SelectItem value="CE">Cédula de Extranjería</SelectItem>
                    <SelectItem value="NIT">NIT</SelectItem>
                    <SelectItem value="PP">Pasaporte</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="docNumber" className="text-xs uppercase tracking-widest text-zinc-500">Número de Documento</Label>
                <Input 
                  id="docNumber"
                  type="text" 
                  placeholder="Ej: 12345678" 
                  value={docNumber}
                  onChange={(e) => setDocNumber(e.target.value)}
                  className="border-zinc-200 focus:ring-brand-emerald"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  onClick={handleSearch} 
                  disabled={isSearching}
                  className="w-full bg-brand-emerald hover:bg-emerald-900 text-white uppercase tracking-widest text-xs h-10 shadow-md btn-interactive"
                >
                  {isSearching ? "Buscando..." : "Consultar Sistema"}
                  {!isSearching && <Search className="ml-2 w-4 h-4" />}
                </Button>
              </motion.div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 bg-red-50 border border-red-100 rounded-md flex items-center text-red-600 text-sm"
                >
                  <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        <AnimatePresence>
          {client && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-8"
            >
              {/* Client Header Info */}
              <Card className="border-zinc-200 shadow-lg overflow-hidden">
                <div className="bg-brand-emerald p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-brand-gold/30 flex items-center justify-center text-3xl font-light shadow-inner">
                      {client.firstName[0]}{client.lastName[0]}
                    </div>
                    <div>
                      <h4 className="text-3xl font-light tracking-tight">{client.firstName} {client.lastName}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="px-2 py-0.5 bg-brand-gold/20 text-brand-gold text-[10px] uppercase tracking-widest font-bold rounded border border-brand-gold/30">
                          {client.documentType} {client.documentNumber}
                        </span>
                        <p className="text-emerald-100/70 text-xs uppercase tracking-widest flex items-center gap-1.5">
                          <UserCheck className="w-3 h-3" /> Perfil Activo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-200 mb-1">Ubicación Registrada</p>
                    <p className="text-sm flex items-center gap-2"><MapPin size={14} className="text-brand-gold" /> {client.city}, Colombia</p>
                  </div>
                </div>
                
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left Column: Alerts & Upload */}
                    <div className="lg:col-span-1 p-8 bg-zinc-50 border-r border-zinc-100">
                      <h5 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold mb-6">Estado de Cuenta</h5>
                      
                      <div className="space-y-6">
                        {client.pendingFields.length > 0 ? (
                          <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                            <div className="flex items-center gap-2 text-amber-700 font-bold text-[10px] uppercase tracking-wider mb-2">
                              <AlertCircle size={14} /> Documentación Pendiente
                            </div>
                            <ul className="space-y-2">
                              {client.pendingFields.map((field, i) => (
                                <li key={i} className="text-[11px] text-amber-600 flex items-center gap-2">
                                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                                  {field}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            <div>
                              <h6 className="text-emerald-700 font-bold text-[10px] uppercase tracking-wider">Todo al día</h6>
                              <p className="text-[10px] text-emerald-600">Documentación completa.</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          <Label className="text-[10px] uppercase tracking-widest text-zinc-400">Subir Nuevo Archivo</Label>
                          <div 
                            onDragOver={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                            className={`border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer group bg-white relative ${
                              isDragging ? "border-brand-emerald bg-emerald-50 scale-[1.02]" : "border-zinc-200"
                            }`}
                          >
                            <input 
                              type="file" 
                              className="absolute inset-0 opacity-0 cursor-pointer" 
                              onChange={onFileSelect}
                            />
                            <Upload className={`w-8 h-8 mx-auto mb-2 transition-colors ${
                              isDragging ? "text-brand-emerald" : "text-zinc-300 group-hover:text-brand-emerald"
                            }`} />
                            <p className={`text-[10px] uppercase tracking-widest transition-colors ${
                              isDragging ? "text-brand-emerald font-bold" : "text-zinc-400 group-hover:text-zinc-600"
                            }`}>
                              {isDragging ? "Suelta el archivo aquí" : "Arrastra o selecciona"}
                            </p>
                          </div>
                          <Button 
                            onClick={() => handleUpload()}
                            disabled={isUploading}
                            className="w-full bg-brand-gold hover:bg-amber-600 text-zinc-900 font-bold uppercase tracking-widest text-[10px] h-10 btn-interactive"
                          >
                            {isUploading ? "Procesando..." : "Cargar al Sistema"}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Document List */}
                    <div className="lg:col-span-2 p-8 bg-white">
                      <div className="flex justify-between items-center mb-6">
                        <h5 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">Expediente Digital</h5>
                        <span className="text-[10px] text-zinc-400 font-mono">{client.documents.length} ARCHIVOS</span>
                      </div>

                      {client.documents.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {client.documents.map((doc) => (
                            <motion.div 
                              key={doc.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="p-4 border border-zinc-100 rounded-xl hover:border-brand-emerald/30 hover:shadow-md transition-all group relative bg-zinc-50/30"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-white rounded-lg text-zinc-400 group-hover:text-brand-emerald shadow-sm transition-colors">
                                  <FileText size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-zinc-900 truncate">{doc.name}</p>
                                  <p className="text-[10px] text-zinc-400 uppercase tracking-tighter mt-0.5">{doc.type} • {doc.uploadDate}</p>
                                </div>
                              </div>
                              <div className="flex gap-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => setPreviewDoc(doc)}
                                  className="h-8 px-2 text-[10px] uppercase tracking-widest text-zinc-500 hover:text-brand-emerald hover:bg-emerald-50"
                                >
                                  <EyeIcon size={14} className="mr-1" /> Vista Previa
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-brand-emerald">
                                  <Download size={14} />
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={() => handleDelete(doc.id)}
                                  className="h-8 w-8 text-zinc-400 hover:text-red-500"
                                >
                                  <Trash2 size={14} />
                                </Button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-12 text-center border border-dashed border-zinc-100 rounded-xl bg-zinc-50/50">
                          <FileText className="w-12 h-12 text-zinc-200 mx-auto mb-3" />
                          <p className="text-sm text-zinc-400 uppercase tracking-widest">Sin documentos registrados</p>
                        </div>
                      )}

                      <Separator className="my-8 bg-zinc-50" />

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Teléfono</p>
                          <p className="text-xs font-medium">{client.phone}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Email</p>
                          <p className="text-xs font-medium truncate">{client.email}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Dirección</p>
                          <p className="text-xs font-medium">{client.address}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Última Compra</p>
                          <p className="text-xs font-medium">{client.lastPurchase || "N/A"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Document Preview Dialog */}
        <Dialog open={!!previewDoc} onOpenChange={(open) => !open && setPreviewDoc(null)}>
          <DialogContent className="max-w-4xl h-[85vh] p-0 overflow-hidden bg-zinc-900 border-zinc-800">
            <DialogHeader className="p-6 bg-white border-b border-zinc-100 flex flex-row items-center justify-between space-y-0">
              <div>
                <DialogTitle className="text-xl font-light tracking-tight text-zinc-900">
                  Vista Previa: <span className="font-medium">{previewDoc?.name}</span>
                </DialogTitle>
                <DialogDescription className="text-xs uppercase tracking-widest text-zinc-400 mt-1">
                  Expediente Digital LMV • {previewDoc?.uploadDate}
                </DialogDescription>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setPreviewDoc(null)}
                className="rounded-full hover:bg-zinc-100"
              >
                <X size={20} />
              </Button>
            </DialogHeader>
            <div className="flex-1 bg-zinc-100 overflow-auto flex justify-center items-center p-4">
              {previewDoc?.url && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full max-w-4xl bg-white shadow-2xl rounded-sm overflow-hidden flex items-center justify-center"
                >
                  {previewDoc.type === "IMAGE" || previewDoc.name.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                    <img 
                      src={previewDoc.url} 
                      alt={previewDoc.name} 
                      className="max-w-full max-h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <iframe 
                      src={previewDoc.url} 
                      className="w-full h-full border-none"
                      title={previewDoc.name}
                    />
                  )}
                </motion.div>
              )}
            </div>
            <div className="p-4 bg-white border-t border-zinc-100 flex justify-end gap-3">
              <Button variant="outline" className="text-xs uppercase tracking-widest border-zinc-200">
                Imprimir
              </Button>
              <Button className="bg-brand-emerald hover:bg-emerald-900 text-white text-xs uppercase tracking-widest">
                Descargar Original
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
