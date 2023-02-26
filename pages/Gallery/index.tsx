import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Gallery() {
  return (
    <div>
      <div className="tengah putih top-5 bottom-5" data-aos="fade-left">
        <h2>21 Feb '23</h2>
        <Image
          src="https://lh3.googleusercontent.com/pw/AMWts8BgiZe9lcU5yND_zWvXkxPIACwWS94fcfxww6MkyhR2AmwHWGQZcJ0-b-acDRwRC4Hq-mF6sxz-bS6-57obOu9ZtQpymanGS2EiTBjpvDADHEZsIdcuBswLNgmpouNXhvV-N8gIilQUJwqyMH0lrU-v=w1470-h829-no?authuser=0"
          alt={"School Roof"}
          width={578}
          height={370.5}
          className="bottom-5"
        />
      </div>
      <div className="tengah putih top-5" data-aos="fade-down">
        <h2 className="top-5">18 Feb '23</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8D1Wgylp4QhBE8opdEi-EUjPnR4pEpoAc-q0XoMFvF7wb78iyVBXc7D2XSY5zxw8aXq1jzdaS7z3jDZe9e6ICY24ReCbp5Mllyq5gDYzriXTc2mbD2EoNkV7oIkC-1wckhQlVnAwHdiqhdlufEUEVog=w1766-h995-s-no"
              alt={"Sawah"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8D3XmSIOs2oDV5ev0TTp_s1jqNly4-Cl1-KuLI_UhtaZBXJ2tqKAywu5j-Qa4L8TFSUb4i4mH8dOv_KejZGqZrtXfxmCG2XrH41vsk-qnYJu3r8VuHTNjG8Y3DBe_1UHtVNBu-FRxLVDVsf4TFZtwX5=w1766-h995-s-no"
              alt={"Sawah"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8CxuhrN-ZkIoZpquJzIMkPPWDS3uBUT6N6VfGdA4_tIjhdCzsdtB2lUp5FUn78Hw3bx-QUGOpp0KYVyWzLSUQT6_mbbrb-UhZABMz-RKKurfh2U6skG4lQh6QY_scj_CCWAmOEfhkgk27Oass-Ny6Hz=w1766-h995-s-no"
              alt={"Toba"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8AV7K3gWBmNkn94qBS_e1eZ8JKhJClvHwyTeEyaUxQAYd-bDsrmblpdD1nNV-mNwl-h-FW77f6buQ0oj9oMMH9RmE_YA4mVRZt4W6C7BEM6KYEpfMSoZJn3IsNmo8yWa5rQx76xXFyvs1dUhOPWRIr7=w1766-h995-s-no"
              alt={"Toba"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8B5btGPpigqHUiJU_wqZYJklnRx69q_Ix1HBTljGTorvZCUx1GJVi6mZywh3wyhL5sEF_J4BbCm9UahtiTD7KfzOdc9OjydpHbP06ZtRYRKnFxoBaUY2-6jGGkTrAOxDpV_6vwOQAzcxdOrXBUIc_3K=w1766-h995-s-no"
              alt={"Pantai Pasir Putih"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8AoatUfm_hpT7SxKeCHAY3o068RWAAfFTP7796VonwACKyzTRX2RZ-y3Alavp14rYD2YLtfzpdCB0RxRrAMRlwuynDgN6qpT1eI_d10GDow8j5e_4aEr7xi6pGQ8n1h6GJc2hlZLpEGXr9Uaz0yIaUh=w1766-h995-s-no"
              alt={"Pantai Pasir Putih"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="tengah putih top-5 bottom-5" data-aos="fade-right">
      <h2 className="top-5">5 Feb 2023</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8Bujhy4REOOUbHcXzJq8eHnunzOxZ8gWgI2arSChY9UAXPG2tw_jEZV0xWR2y66yky3wMJAcfSIDvECIgS8aPZ7tdBLjUiTH198-wK22dLNUfIpBhtCQUZvYe5KyKbFgBcBFt0KXhpH4Jq_KEFISX1G=w1766-h995-s-no"
              alt={"Sentabi"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8B5qI8ABY-73SH8fOJInR9pR4-BuFcwDI6hn95x0Jgx71Wb3fCz-traO2twz1YM7Io-aNRQ_83VG4ycobRM4BNOiaiO-7A0b1rD_CkMtFEPxovXVI-RM7JY2eByW-5sR5hgWsOmwhGXoHHAgJbFd-kD=w1766-h995-s-no"
              alt={"Sentabi"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8D8sYH7J78bWDMW3pcDhgg4n7QVAN8avc8c_YFcrBs4TUSffNA6w-fg0cPNNHc5TMRrAwIFrpJcbQFWp3Oixcg3ig58fXsTgi_BRJv24JUfGPiFOuUStiJ1tYRQquzcLD457iX5xzK6vQXnX8fulMQ5=w1766-h995-s-no"
              alt={"Sentabi"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8B2ZRikBl38OOx9P7n9YAYsGFNLy8mjpNFM2Tk3QW19FlME9sXdb3XsnQviVBOkUHJQxkfw7AYS7Xl5Lpi3W_Ii2doEoiUzbvVhHSMIS4Ez2iWZditpqinU0XthiwEzQoXiiAE-yYcyK8iE_vVyLXXm=w1766-h995-s-no"
              alt={"Sentabi"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="tengah putih top-5 bottom-5" data-aos="fade-up">
        <h2>4 Jan '22</h2>
        <Image
          src="https://lh3.googleusercontent.com/NWiX5cNrZqAAryQIv3ef8l_uyinD0xtuP2kLSDTmRdZCmZJwXS7N1hbdAY44yK_PU-h3ib4M72vjGTyNHlOxzNA7kTON6htG-jRHwJD2EXCYLTfiONf5_VvFM_lk4u4SLfomXZFheIIHuiTlSNG-PID1EExldHQX-6VQepsaLDNQ_CM9UZV3VwPWAU__GjQ8g__xAZCOlhHkbjUey0-rOYCPOtdg1ZWePk5Ss92rH6sb0O9XUWC4B82468eHdeAEnCp6hr8M2_pUrkwBioVI7ux4mTa5pXMpzP23bDvj5B0mlGezgux2lz2mul9KoiADoKJ2LJI_76ajo2YzoUAedfnDHgr4V0wW2avIHBG9wDOkw1AEfsVT65GPPxQybfXlRCIvGll5CJaa_fgTA-G21_3ZUOwTz8OReNSCTdlLK2Xj4-Hny4RjWf_Z7wHqAvNnFjB8DKUmj2zI9Z-uLkMkDTmIdu1hZaqONeM4qpGmpOzqxaNUYl-WwVuqokTYSmBJ44ACLdBEbSBrDkfso7Rp07EV1IzpglFMRwEoZ96f-dhldJJ6ReHoftDnnui6TwztSbSkw0p6apBEjzie8MCeOwDmt2R4Eu4ucsrX0HZf_LBqSlX13o4FbcacSzRNBa0zt1ZeEXNG4_Cb6W3wneTbUWyvDyDzhAISH5pSGLokKC2aLGEenSVy5J--xXfQ_k_Z10rt_L_0h-Bxe6O5ifI5SvjgYDuapfUdZOgFM6pcB3_B6hecgdVVwD_Y1JG-8ogtgLX5g5gVk35-g_qBHdpC1P07l84_klWXJ5RVrY6UnCwR9zh08qOH45BIDTSo8otmCWVtbRKUdLsY43M5Yv3yNrbl5hY5Gemiy0ziXZUsRQUGVa0m0ZCmTqbGIovK3FnrxdoVkwC4oHL5u7fVk3Skqp_llOFR6DJXuT_E7bRFw2XtFE2OiEcjuNSDRu5oVsP91LpuLE_HJ6ORF8H0Avv5rKJVFj9dcSt1Pa6KJ9nCKEfof_thkkPEEQ=w1770-h995-no?authuser=0"
          alt={"Pajak Pancur Batu"}
          width={578}
          height={370.5}
          className="bottom-5"
        />
      </div>
      <div className="tengah putih top-5 bottom-5" data-aos="flip-left">
      <h2 className="top-5">2 Jan '22</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8CEsdApnVWHfPttz5hXIV9Ysee-nRlYfNV6TpSgCTWEis_MAyzJW9Rong5jSADoz7JqiBXX1a1LQor5C2u0Q58qXl5h2S_330kVWlaXJHrJdqXRsdPhLlVmRokwkcA6vSro1KXaeKWeOfwp7xRX0SQf=w1769-h995-s-no"
              alt={"Berastagi"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8CLfmoJXubC8E2wtvlfIS8nWQcIGiXAIEl57EyCDu5_mZO1PIdxHT0PWs1TLHADSD7AwFg7NiqDeLuWCdMeSuWr2chyx9NZQ198A_siJfiNCNs387W9KpLczm6vv7pQABb2im4_rY23uh86FV3LXxuh=w1769-h995-s-no"
              alt={"Berastagi"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8DgENbfSrtVO7daMlDjUMAzYQnrxfIa9JN-5_2ttikl5UDeSw2feFNDItATDbYSIAPNSeozdoqsMX-Z9paePD3pGCVPcmzJ7XIxRk7CQrkkSifENU5LBz7WrErQw_ntx6corKUFJe167QDSl7Xu5BFq=w1769-h995-s-no"
              alt={"Berastagi"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8C1PmSdSF8AJXAdAbsZUWxINdmHlxiivjwMAjukpLFiX3ofdF8UPz0XVmXqRFAoOGJ7etw5IF4kPsnjq2gqyXxOHRAoLm6HBMcXR99kYlRW_Y7BLEyC9OJtOxNzV-Spebnw7-vgMx41hr0bDTiPobSr=w1769-h995-s-no"
              alt={"Berastagi"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      
      <div className="tengah putih top-5 bottom-5" data-aos="slide-up">
      <h2 className="top-5">30 & 31 Dec '21</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8AfTKY4fhZ6d6s_sSkgP-WCLebsyX2C0yRcom37Oz4r8O0AfPfxi7yiR0UXHlgYMPMRlD_-pa15egmZ7dl3JppH7nFZFkv8CxZEQBaNc7SC-VrGUTdsxoBs3ty2Cj1kxO76hx0HIK__5m_n-vwHFzzH=w1769-h995-s-no"
              alt={"Danau Toba"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8CZmamZ6agrrbNVF-edkXg-Tb-c1IB3qCvn2iB42eVyFC84iDrcXvY5hXH2Wou-9B0JXXNojz0QLJXcAROTy_u2kz6WStEfgwaqf9Zmz4jTcnH6SFgdcN2-KerrKC-03CKM_iHIli9GkwiHFCmP0HTJ=w1769-h995-s-no"
              alt={"Danau Toba"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8Dv5T0ibI440JJvJ2wKFWZsUbGBr3MvkgkbkcMJgGjKkdK44aE3eGJoauWW1aCht70_fKGBso03T9PYZajWV5Re_PbVp567qJ9smmCQ-KqxlulDIVo-Y5KyqQlTzE5jnlVc7h3I_G6ln4pexMckBNJP=w1769-h995-s-no"
              alt={"Danau Toba"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://lh3.googleusercontent.com/pw/AMWts8DN2xo5c4F3oCyGUaELbdywlpXPqyDh37VhTAR7zxv-yxmDrpaUCRb8ReJBo_uBkx9GMp0dSdK3XSm231KSIT88Pm1BC64avVHf5aeA8nyrIVpaWi1C0_4qPRVEYFEDRW7ntAnUDPbjiy-SFm_NiV_D=w1769-h995-s-no"
              alt={"SPBU"}
              width={578}
              height={370.5}
              className="bottom-5"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <footer className={"tengah bottom-2"}>
        <p className="putih top-4">
          Hope You All Have A Good Day
          <br />
          {"La Vida No Enjusta, La Vie Est Enjuste"}
        </p>
      </footer>
    </div>
  );
}