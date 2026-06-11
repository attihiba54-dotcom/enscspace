const system = localStorage.getItem("system");
const matier = localStorage.getItem("matier");
const sana_count = { s1: 5, s2: 4 };
const links = {
  s1: {
    info2: {
      1: "https://drive.google.com/drive/folders/1gafI_AdVSM1EQrLkiFriUvM_Mt2PfB-q?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1DYQ9qBD8I5VY8i1qbEm7iyuijLK8Zt6X?usp=drive_link",
      3: " https://drive.google.com/drive/folders/1YiYxKGPHGc8ybsaCUPWhHuRvrZC4AWzl?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1Jcd-M8MehRGULk15_EW2Y5WSpabjLefS?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1KRx4DmYX2JrvHwsVoLO9Ic3BqmCAPn0_?usp=drive_link",
    },
    math2: {
      1: "https://drive.google.com/drive/folders/1QY1eTaZHRy-VTsDYukstrefpAx9hcXOB?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1pFCKSs4puJDnmGfN3Oez18O78_rGfVt_?usp=drive_link",
      3: "https://drive.google.com/drive/folders/17DI8p9i-yg0913aWrdpvos-DKCirFF8P?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1tnI2WR5kLetAePFXCO2Rag8Zw8cbA_C9?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1OgO_A12p7fe2MNTx3fjKGvgLvHq99jq0?usp=drive_link",
    },
    scienc2: {
      1: " https://drive.google.com/drive/folders/1ggAK0FVfiiHosQw0UNd3lJQvikxUHUfa?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1K2JdXB1BZovrc_uxoehaWdLVR32PsvXy?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1CIhSFnfUWj52RzCYk-5Hfw62d3IEAjjN?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1IVyfKMCJP6lihGIaSulMSOEMFXdOlKY7?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1HcJNpyGgMwSJMCfiv1ifPqZy3WQTj0St?usp=drive_link",
    },
    phy2: {
      1: "https://drive.google.com/drive/folders/1sjoG0zgu65X3JsPRQ9ZuRBpaQ2FSRViR?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1_h8KI152IEzP8UcSA89R7e2a7L8NCig3?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1edmHkqbdTt6YMmVxzVU9woGuGJuPP5g0?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1bylKjPAptSuD_pm6P2ODsjVLH51WqPec?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1b1T0KZ0IVHVXCDRuXgu1kE9q1wpyVYgv?usp=drive_link",
    },
    arb2: {
      1: "https://drive.google.com/drive/folders/1-8PmfNhFXNmKUjTUbLegCwMMIRWHipky?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1wR4ba7CSmkdBdbB41O9ly5IrU91zJtXZ?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1hwYhebM-z5MyEQNnCtqAoZZTNyLjAm-8?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1otw_W0sHNNMtrEcyAL_PSRdToTZ27QuG?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1TgvH7wbQVKbnu2rKJnpRpHwazXscMjni?usp=drive_link",
    },
    en2: {
      1: "https://drive.google.com/drive/folders/15KurGeQ2BbHpWFFftynVQmdHsWhYmLgF?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1Q98yurtCWvbcBIoW_v0dMA9nshsV8GFC?usp=drive_link",
      3: " https://drive.google.com/drive/folders/1dJQ5KXOt-9AdlC7W31IaqSs_vG-tzXLI?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1YYHfHx37BjNBS2o7oYzv82L3Mo6b3NkG?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1wfYi1SzLLPPbd1leWeoXxvER-7XQ4tYK?usp=drive_link",
    },
    fr2: {
      1: "https://drive.google.com/drive/folders/1_mkSm3QIUHadfcdXAFkn13VGJVF6q8F-?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1q0UAqNNSLBE-6yjUkmnyoQyxYUKo_8IS?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1CFFR0Tl9c3txarJiJHHFzZxm1gLhriQX?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1nykBvxCMwkjngDTQgterYgaym5NkI9Tb?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1iZk0Nxjey6dxrXaOaTCWaQQImY0iJJfy?usp=drive_link",
    },
    his2: {
      1: "https://drive.google.com/drive/folders/1od75d2Y9X0vFA5GL895-am8-gmWLUT1p?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1EorVjFcqQEEelYrHmN6vIx9rUDlJBKRb?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1yS_kGV1Cg1l_Nrc5HOUm9A4UYGUtwpDI?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1ZqNAPQf0yZhh78uvVCSvzTzT7WLNLtyr?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1B4qJRf0bZb-fBvEI16qKUZ4BYUWYAwVP?usp=drive_link",
    },
    falsfa2: {
      1: "https://drive.google.com/drive/folders/1-Cs46LlJqawlDwP8RHMIwDLRQpUec2Mn?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1r1A_HlwyB3oKE0fabTWabYwmqeI8KW8M?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1nVCowvaCO18u5iHFgOMXi4xOucz6xLTO?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1VMv9Hvob7zTklTJsrTw3PJZUFFjSSU_B?usp=drive_link",
      5: "https://drive.google.com/drive/folders/1Hpdz2o1kEnhE5maMLTKw6lHFbioUthGE?usp=drive_link",
    },
    islm2: { 1: "", 2: "", 4: "", 5: "" },
    sport2: { 1: "", 2: "", 4: "", 5: "" },
  },
  s2: {
    info2: {
      1: "https://drive.google.com/drive/folders/14ixD-C7laBII3QVWQAvaz2Spc5ft8PWt?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1n3QeJYfTc4K_uxc08706X8neZrNj1G6y?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1EFiFW9IpgXZcYaYaeF7n6q7kz2HidbHI?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1p4edIFOK2eOSH7qwh7ID5EexdxIZEAEQ?usp=drive_link",
    },
    math2: {
      1: "https://drive.google.com/drive/folders/1sr_Fs07dW1YKWTiIA4EHZXinpWfQoIwS?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1VbgnUV1I-yDKKi-TeGnAVaYLaWGOIVds?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1oY3-PXw7_skF5qgQ4W55u9ku_4AXCX0Z?usp=drive_link",
      4: " https://drive.google.com/drive/folders/1eniFCxK1y5h42klvCikbjz8FSEOBmC5w?usp=drive_link",
    },
    phy2: {
      1: "https://drive.google.com/drive/folders/1lgojI0tWYB6lVYN9hqqi-HqdQvA0o7oY?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1kFH_PP2IUPyZIn2nGbt-z7Lvi0ZYcVxb?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1WQx6LnBCiGMv1yZOKfKy33sOonP9NV5X?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1IU8LEl-0S8ey7QT8gQCP_NxeNJ5Eau81?usp=drive_link",
    },
    scienc2: {
      1: "https://drive.google.com/drive/folders/1R7lnMHThAPrMLDV6nJcudMi78O6vbyfk?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1GuQpwmTd32SlTYnz6uc9nttf_rX6aw55?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1yJPfzUGBr59CXtvTzjyrc-8FnC4rivmn?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1J6orkX_ZdAqvnR3Apk557uPWCgiNVMJu?usp=drive_link",
    },
    arb2: {
      1: "https://drive.google.com/drive/folders/1Rx9Tf6SKYRec_KbTeh_bCkuCFhowG8IK?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1SbkTOQaKcfDaywktMVyMiPMfzfTBAfVE?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1LRkjltFCJAMDtIRELjAwOy2zuIMsQnTe?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1o5jxrUM47b9Bfuxls1s4vAz7rLZKsIU-?usp=drive_link",
    },
    en2: {
      1: "https://drive.google.com/drive/folders/1KMOjGbyixN2nOyK4t8paWxOCttq96aeB?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1KqFEjWTV6Jp3dhkloRne_Imt_wMQEtlk?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1zu9LlDT7T9uH0Sg6A1HmyB2L4FZnBCdx?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1pjLed3ac4BTG7QtAhN-bFBye0uTOvHtm?usp=drive_link",
    },
    fr2: {
      1: "https://drive.google.com/drive/folders/1TpSbCiiy6ZNrGjSZXVkfxDdsj0nCEi_z?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1jw0iYHMrsRZ0NBTFatfadJZAM2RwVs-E?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1Ia5ZxMS4n9HcRyDBt0Yv7dB661tnXUDw?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1q9sdbGb1s8PGQyBxch1VX6kB1HyF0X5o?usp=drive_link",
    },
    his2: {
      1: "https://drive.google.com/drive/folders/1xv0F6sGBgCY0Aahg-REJXzT1II4cTMd1?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1b232Jf5c-SwgQccK6wg5UJ8BwopdhDKO?usp=drive_link",
      3: "https://drive.google.com/drive/folders/1MHE74gbm1TSv_qEvonDrLy_YC8uEhDLy?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1-b-SjzvHpB5opSMTu73CG2DLR1RyHbIt?usp=drive_link",
    },
    falsfa2: {
      1: "https://drive.google.com/drive/folders/1EujMDkchpjinST26k2m6STveBloNLGYK?usp=drive_link",
      2: "https://drive.google.com/drive/folders/1SB8_WG2fwgtJV0-xVu97OPCi4Jpw7xcV?usp=drive_link",
      3: "https://drive.google.com/drive/folders/11wZPAm6vTq-keaCFnaqHJnqBjV3akRCY?usp=drive_link",
      4: "https://drive.google.com/drive/folders/1A08IT1TE78zYq7tFkHcevrUhDRpdHuXa?usp=drive_link",
    },
    islm2: { 1: "", 2: "", 3: "", 4: "" },
    sport2: { 1: "", 2: "", 3: "", 4: "" },
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
