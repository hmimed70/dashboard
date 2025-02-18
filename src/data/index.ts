// dairaData.ts
export type DairaData = {
    Zeralda: number[];
    Rouiba: number[];
    DarElBeida: number[];
    Baraki: number[];
    Draria: number[];
    Cheraga: number[];
    Birtouta: number[];
  };
  
  export const dairaData: DairaData = {
    Zeralda: [10, 15, 7, 12, 5],
    Rouiba: [3, 16, 18],
    DarElBeida: [16, 13, 9, 14],
    Baraki: [8, 6, 17],
    Draria: [11, 19, 9, 16, 14],
    Cheraga: [5, 8, 14, 17, 12],
    Birtouta: [18, 8, 19, 11],
  };
  
  export const xaxisCategories = {
    Zeralda: ["Mahelma", "Rahmania", "Souidania", "Staoueli", "Zéralda"],
    Rouiba: ["Rouiba", "Reghaia", "Harraoua"],
    DarElBeida: ["Ain Taya", "Bab Ezzouar", "Bordj El Kiffan", "Dar El Beida"],
    Baraki: ["Sidi Moussa", "Les Eucalyptus", "Baraki"],
    Draria: ["Baba Hassen", "Douera", "Draria", "El Achour", "Khraïssia"],
    Cheraga: ["Aïn Benian", "Cheraga", "Dely Ibrahim", "Ouled Fayet", "El Hammamet"],
    Birtouta: ["Birtouta", "Ouled Chebel", "Tessala El Merdja"],
    all: [
      "Mahelma", "Rahmania", "Souidania", "Staoueli", "Zéralda",
      "Rouiba", "Reghaia", "Harraoua",
      "Ain Taya", "Bab Ezzouar", "Bordj El Kiffan", "Dar El Beida",
      "Sidi Moussa", "Les Eucalyptus", "Baraki",
      "Baba Hassen", "Douera", "Draria", "El Achour", "Khraïssia",
      "Aïn Benian", "Cheraga", "Dely Ibrahim", "Ouled Fayet", "El Hammamet",
      "Birtouta", "Ouled Chebel", "Tessala El Merdja",
    ],
  };
  