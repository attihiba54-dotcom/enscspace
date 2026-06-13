const system = localStorage.getItem("system");
const matier = localStorage.getItem("matier");
const sana_count = { s1: 5, s2: 3 };
const links = {
  s1: {
    arb2: {
      1: "https://drive.google.com/drive/folders/1RuAK-wfVT9-zVT1f94dG_bT8B4pkO-Pu?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1R_T3qHDHSgtdmxZtV1u1ENEMSuD4LFnL?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1vH_ulp7wbrncX0HiBKSJxykz-i-t4sPw?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1VIBBhuyKoCaHP9YvjaMet6xsHLUVNy7m?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1-lf_NVAi4Or8mHDxLVPtyhE1tcAFlu2a?usp=drive_link",
    },
    fr2: {
      1: "https://drive.google.com/drive/folders/1cprzxY36P7N-x7yC2-dLBFxTx-4nrmpj?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1r225akFPZiYfVlqmyntM-UUL9iE9Ivt7?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1bV8JN5iThF-EZrWBHx9vTfYHOhaDFoXT?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1VCEESOrDehDdOV0sdsqoJwia-CFvxpJ3?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1GOyaiUCdPq9E-VfeIt0uIaGWWIv45wv0?usp=drive_link",
    },
    en2: {
      1: "https://drive.google.com/drive/folders/1liNf7fwunnAm-pi1wFnz9oGwn1BHhKuS?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1t9qjkFODOToclPnWli9uQo0HvWSDxU1w?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1b5GHXI3CQ0fDxx1BNxilWl71MEar3Gum?usp=drive_link",
      4: "https://drive.google.com/drive/folders/15xyZrgEYKv8yY1zhI5pA7kZNVrXhghpO?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1rab2dVAu8STU1cTiCuvetdPCqrLyWb-4?usp=drive_link",
    },
    sport2: {
      1: "https://drive.google.com/drive/folders/1YEvDVhilXaRceNTvNStmV7g4aRUBlB2f?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1JwEMDJ9EtjKUelpaS9Vt64PyleP8yXvH?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1Xan5IacBT1-byXxC53x5bC3040m8iyWw?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1_Gw4DL9nYzT7HKH1gMqkkCjwkE58SyIS?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1Ml3ajLTixMHsJPAqTG3SYT4rr9FirFaB?usp=drive_link",
    },
  },

  s2: {
    arb2: {
      1: "https://drive.google.com/drive/folders/1gJrT9cB6-UVWe620sc_xs1rEibwziefs?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1dvlRPbrexpnDCi8XDKBnxlMdz5w22_Hm?usp=drive_link",
      3: "https://drive.google.com/drive/folders/17xYWykw6cEUV_K0pRy3C_-G21QhOBqYO?usp=drive_link",
    },
    fr2: {
      1: "https://drive.google.com/drive/folders/16DtDdwfzUIynYmNaAvThFz0mvu3I6W0p?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1_s19shYvWn52ekCA1x50dvSSJdroKDdG?usp=drive_link",
      3: "https://drive.google.com/drive/folders/185GeFLb1uuXoVLsy603s8NM4sXF8hloC?usp=drive_link",
    },
    en2: {
      1: "https://drive.google.com/drive/folders/16DtDdwfzUIynYmNaAvThFz0mvu3I6W0p?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1wcniKk9-qG51IjxNkePiNeiyK2jaQL0F?usp=drive_link",
      3: "https://drive.google.com/drive/folders/185GeFLb1uuXoVLsy603s8NM4sXF8hloC?usp=drive_link",
    },
    sport2: {
      1: "https://drive.google.com/drive/folders/1CDl2b_q044l8kii6iBIIdzR-R5Lf7cRJ?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1FSJTfVlFBO2jJNvneyRW3ZEHEn7XGaZG?usp=drive_link",
      3: " https://drive.google.com/drive/folders/1Mk4btXk_nlIihJROGYHiXtBPOGEMCWnG?usp=drive_link",
    },
  },
};
const count = sana_count[system];
const container = document.getElementById("container");
for (let i = 1; i <= count; i++) {
  container.innerHTML += `
        <div>
            <button onclick="window.open('${links[system][matier][i]}')">
              ${i} PEP
            </button>
        </div>
    `;
}
