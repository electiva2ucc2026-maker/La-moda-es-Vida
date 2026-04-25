export interface ClientDocument {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  url: string;
}

export interface Client {
  id: string;
  documentType: string;
  documentNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  lastPurchase?: string;
  documents: ClientDocument[];
  pendingFields: string[];
}

export const mockClients: Client[] = [
  {
    id: "1",
    documentType: "CC",
    documentNumber: "12345678",
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan.perez@example.com",
    phone: "+57 300 123 4567",
    address: "Calle 100 #15-20",
    city: "Bogotá",
    lastPurchase: "2024-03-15",
    documents: [
      { id: "d1", name: "Cédula Frontal.pdf", type: "PDF", uploadDate: "2024-01-10", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      { id: "d2", name: "RUT 2024.pdf", type: "PDF", uploadDate: "2024-02-15", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
    ],
    pendingFields: []
  },
  {
    id: "2",
    documentType: "CC",
    documentNumber: "87654321",
    firstName: "María",
    lastName: "García",
    email: "maria.garcia@example.com",
    phone: "+57 310 987 6543",
    address: "Carrera 43 #5-10",
    city: "Medellín",
    lastPurchase: "2024-04-01",
    documents: [
      { id: "d3", name: "Cédula Frontal.pdf", type: "PDF", uploadDate: "2024-01-12", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
    ],
    pendingFields: ["Certificado Bancario", "Referencia Comercial"]
  },
  {
    id: "3",
    documentType: "CE",
    documentNumber: "999888777",
    firstName: "Elena",
    lastName: "Rodríguez",
    email: "elena.rod@example.com",
    phone: "+57 320 444 5555",
    address: "Avenida Santander #12-34",
    city: "Cartagena",
    lastPurchase: "2024-02-20",
    documents: [],
    pendingFields: ["Documento Identidad", "RUT", "Certificado Existencia"]
  },
  {
    id: "4",
    documentType: "CC",
    documentNumber: "1130652833",
    firstName: "Yuli",
    lastName: "",
    email: "brayan@example.com",
    phone: "3188645305",
    address: "Cra 28 #72-69",
    city: "Bogotá",
    lastPurchase: "2025-05-30",
    documents: [],
    pendingFields: ["Documento de Identificación", "RUT", "Cámara de Comercio"]
  }
];
