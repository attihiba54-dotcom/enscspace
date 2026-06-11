const system = localStorage.getItem("system");
const matier = localStorage.getItem("matier");
const sana_count = { s1: 6, s2: 5 };
const links = {
  s1: {
    math2: {
      1: "https://drive.google.com/drive/folders/11n6qJfD3nSuKxFsIFs5B0ce-ZvHZRDDP?usp=drive_link",
      2: "https://drive.google.com/drive/folders/12ZrQhwSTqRqoKvviQentPjgqPDGAUC_4?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1sBix409Qu6fpOPWhQG1ho17wQvueQDgk?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1m2WuvSy5InL_-SZGCqSGDgQZVi-8YDfb?usp=drive_link",
      6: "https://drive.google.com/drive/folders/10Dfw1ZqU6y7E0pK5m3-loQrFq4T9kULF?usp=drive_link",
    },
    phy2: {
      1: "https://drive.google.com/drive/folders/1al2dRQ73pFQr_JlXhif3-DJRaavKmj42?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1jBF7HZ0UvRkZw8I4FlYggIN0KNBevCCc?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1cwsUXnyTxHGL15IUaCiLcGLhRwPzvHUe?usp=drive_link",
      4: "https://drive.google.com/drive/folders/16YUj-sIM0PoMzvvsMe6_wHDw0dOv1knd?usp=drive_link",
      5: "https://drive.google.com/drive/folders/14yDXk6B_knzwYZHFz-eQ3j6WzWUE9hDL?usp=drive_link",
      6: "https://drive.google.com/drive/folders/1W6rAK7mL-MtWWoaF0FB8gdQb9FJ8Jsjb?usp=drive_link",
    },
    scienc2: {
      1: "https://drive.google.com/drive/folders/1NgpXCcKRmHKp5uUNZLzJcywxQ51SqUEF?usp=drive_link",
      2: "https://drive.google.com/drive/folders/14TPKnOwBnQAuctvmhv_CKUvC5hekr57x?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1TvRYCMfz_rFt-0KlSIetaYTfs0CIyE0Y?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1g0Yi_oR5o8MV6htuKvhwtobtYcgLOHBN?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1CLwWNbKKKeVbpreWat1DLvP8bbDkVelO?usp=drive_link",
      6: "https://drive.google.com/drive/folders/1x1YDre0aG63Pca_REgGwa4UH14_Vyad2?usp=drive_link",
    },
    arb2: {
      1: "https://drive.google.com/drive/folders/1__wIHZ1Xo9Q7zgX2FJ2dAg3ZeHH6nB33?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1WjgB3eO1CitXrT1uf-Do_RPYzbH1fVmI?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1lqs2XvDq4TPHuyqy9xAlY3iKnCIXWJTk?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1Mbc4WDBcrHY4WFq1BHEeLKaSzs9zXzwH?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1Lu8ZK7a9mIMNhtAJdNAx9k6P4baTJd8A?usp=drive_link",
      6: "https://drive.google.com/drive/folders/1WQw1lSOlTCNZ7BO308pvDD5he7JoUCga?usp=drive_link",
    },
    en2: {
      1: "https://drive.google.com/drive/folders/1oPnWOQovmXmyv0U7jO5Cd8e1jelYbGlD?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1FvcXyYNbxBYCHAQB4WP2Gux0EHz6cXuK?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1T7uX7qTcC2JhHzHFmuWkiYWn6mD2y9Hr?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1my516h0rr7dE56Vg6sKf44s9aqPS63W7?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1jIBy4BMf__yPBgTsEYYkmz69BbGfSJQb?usp=drive_link",
      6: "https://drive.google.com/drive/folders/1nxb2P0dUvBWKhWu7gujJmV5JciwIPiNh?usp=drive_link",
    },
    fr2: {
      1: "https://drive.google.com/drive/folders/1zLIzULotKRRWKfYCBhjL44BEXTWXlvNp?usp=drive_link",
      2: "https://drive.google.com/drive/folders/17whXCOeq2mkT_N_gwY4rsEqD7xmGSr9A?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1Q4NNbJgJeKEFMGx_mKadmqLPmRlwKh1B?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1NUn04Qdt6mXfcx4xLCQ6hlUStiOHT8C4?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1St0ntsJEVtzRJLt_-sLfHbNWkgP9AWVy?usp=drive_link",
      6: "https://drive.google.com/drive/folders/1HeKsZef5vZs2RjlFI2zme95qupKKSanj?usp=drive_link",
    },
    his2: {
      1: "https://drive.google.com/drive/folders/1cNVLzyzfXmDJPkKNZINNW_YpPJSIBWFZ?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1uvGHMkw1goF3Kl6bWs9IFoWwVaaS3BDx?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1p4GTwTg6IR9S5qmzuQ-hBwukTZCfzQZp?usp=drive_link",
      4: "https://drive.google.com/drive/folders/19Z_CX-O2eVUlf6lNhnQhdTQjzdyb-_ZW?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1REv-LfIHmX7WEHROsJw9ioKv3oBwayLp?usp=drive_link",
      6: "https://drive.google.com/drive/folders/1vALO1K1d1JbKYm0xy0G8Kr-MTEl0gp0K?usp=drive_link",
    },
    falsfa2: {
      1: "https://drive.google.com/drive/folders/1vALO1K1d1JbKYm0xy0G8Kr-MTEl0gp0K?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1u77l-dh7dmRRLMeWsEpFNCQy7R-NLAKv?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1QKtVMryj5bUZcKrijIHZNQNRA4BIrDc0?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1sr-ErStBbrlAMcmiBW03YRYQl0lIfN1S?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1lnyq2s9nBNee25XGsq69s1CYGp-Uid_O?usp=drive_link",
      6: "https://drive.google.com/drive/folders/1NAM3trhNOQ1LI5dSkMkzGrlz-QWUV0Ee?usp=drive_link",
    },
    islm2: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" },
    sport2: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" },
  },
  s2: {
    math2: {
      1: "https://drive.google.com/drive/folders/1fTrMtdCU-WgfMmDRZHiUSD2vjrYuE8E8?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1EafTd6cuWK4FCFTobteD30W9Ipw0-MQW?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1c1fAt4B6ccOwHgEerQBvR33d7Eo6h6xz?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1R3OzHnTICc0YyT9NCKJAuWfI8_OSVcTD?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1Z-JOYrGcRXK4FEpabm8Nn8poIzscfm4U?usp=drive_link",
    },
    phy2: {
      1: "https://drive.google.com/drive/folders/1SZaAVMtycvAlTmL6nKEsTfIA95q3wCwi?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1qA-lkd4_L5oTJqkSFQaZs7QptRXTlU68?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1-7kxv4Z2mpWWCav0-NtF98jmnQyDeZJA?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1L2uOWr_BF3AosUczLAMqJkzVZls4AiD-?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1hNBGMp_FP4EgHZ2JSXfLQQd4raCVN-lO?usp=drive_link",
    },

    scienc2: {
      1: "https://drive.google.com/drive/folders/1pQKrU6YeKhUDK8BvGfwdxsQ8ppjUljEx?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1013o0tBORT-MVNLbNeKlNVp1teqf3XGm?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1TRwONRZKGVct0M2LCf-nG3pFxEBE2QE5?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1pvyY0tIrlxkyST802hINNrCJMZ8So1Fi?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1sdEQDrIZrfMRK7ZszGAl6msg-zXpoX8U?usp=drive_link",
    },
    arb2: {
      1: "https://drive.google.com/drive/folders/19m1zYsGC2zyiWlH-y4ywChg9gbku0ZxA?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1d87wIGNPzKHkTFiwCIrmiLV9Yy6X7m3u?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1UFvcZ6hBpd2iN2I8pAU4N99p2vj8Yi6C?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1qoVh3NR1ASZ-OKVnDoQodQUN8LhqFqA5?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1pqGShQPQwtOL520GuWPzuHzBm9gnlafH?usp=drive_link",
    },

    en2: {
      1: "https://drive.google.com/drive/folders/1f5wxYReojjLd2X8994mORCLcrXTwo1b8?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1unUukOlmqVO4doBe7bcE1I8R6sy2-lzJ?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1ClGJkDmX2V2uObM8VP8s-T1J_NzXM_Tv?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1ClGJkDmX2V2uObM8VP8s-T1J_NzXM_Tv?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1W9zE3_6Na4ud6uTij3J0l2vXmuxqUd9r?usp=drive_link",
    },
    fr2: {
      1: "https://drive.google.com/drive/folders/11V0lJPStp6C5nWRDfWNQpt8G-54fJgWv?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1t1fUA-QvBMsV5tBEC4GERgA3FRphJNIl?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1AauFBBX2vlulqdCTtz1tkeaeRFxPP4Lz?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1oT7W02oC9Wp7M7JD41uuJ3E-zV-W8zpi?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1OxCwHHFnMllNqLGkavQ72HHvOgcpwj2A?usp=drive_link",
    },
    his2: {
      1: "https://drive.google.com/drive/folders/1Ft3SFHN7u9B77FbEiwpv-LzxJBZ1xCTE?usp=drive_link",
      2: "https://drive.google.com/drive/folders/13QizsHhQFUPeMXVRt26PF4Oz_UnE3pL-?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1OgUtR6cNQqveahgcgTGvCIXhTG3Te9Jk?usp=drive_link",
      4: "https://drive.google.com/drive/folders/141fcOzmE-aJolgSacYrC8ewVTsFdK_L0?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1rJAlwo5iiSquGIrFZRp_XmQaJy5sOpMM?usp=drive_link",
    },
    falsfa2: {
      1: "https://drive.google.com/drive/folders/1VgSKA7S_z25QO-Aol_QUmPraQmoYCPxu?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1JmmPcDYe21153S-W2me0lQPiI0kERRGo?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1A_os2zYVmmLkkgwI0he-qwlr5_y_a9kI?usp=drive_link",
      4: "https://drive.google.com/drive/folders/144uUKk2Ypfn2lSzAXSE3Mgg_fC9p5zEk?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1Zfivv9sZlNz5WjbQP3FoHzoV6cp6mOw7?usp=drive_link",
    },
    islm2: { 1: "", 2: "", 3: "", 4: "", 5: "" },
    sport2: { 1: "", 2: "", 3: "", 4: "", 5: "" },
  },
};
const count = sana_count[system];
const container = document.getElementById("container");
for (let i = 1; i <= count; i++) {
  container.innerHTML += `
        <div>
            <button onclick="window.open('${links[system][matier][i]}')">
               ${i}  PES
            </button>
        </div>
    `;
}
