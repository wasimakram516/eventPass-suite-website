'use client';
import React from 'react';
import { Box } from '@mui/material';
import HorizontalCarousel from './HorizontalCarousel';
import { MotionBox, fadeInUp } from './Animations';
import { useGlobalConfig } from '@/components/GlobalConfigProvider';

// Fallback shown until the API config loads. Uses the same optimized CloudFront logos the API returns,
// so first paint does not download a second (larger) set of images.
const defaultClientLogos = [
  {
    name: "Takaful Oman",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/908dafb1-c5c1-4dce-aedc-9cf515145a12_takaful-oman.webp",
    website: "",
    _id: "68e4c10c1d9f2bd1d5d7477f",
  },
  {
    name: "Oman Cables",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/ee3ca5bd-7954-4812-8cbe-dfd121ed6ac5_oman-cables.webp",
    website: "",
    _id: "68e4c10c1d9f2bd1d5d74780",
  },
  {
    name: "MEIRA",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/4843cd48-bcba-4221-b7a4-4957d7084d11_meira.webp",
    website: "",
    _id: "68e4c10c1d9f2bd1d5d74781",
  },
  {
    name: "MTCIT",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/09b91f7a-0975-4165-ae10-fa70f3d2a97b_mtcit.webp",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747a7",
  },
  {
    name: "OCEC",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/297115d6-0f69-4b08-b7d5-89feb3c692f4_ocec.webp",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747a8",
  },
  {
    name: "Dhofar Insurance",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/733695bd-0395-4c78-843d-904389f9eb8f_dhofar-insurance.webp",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747a9",
  },
  {
    name: "Vodafone",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/a28c2302-f379-4d99-a74f-3f6fc405b620_vodafone.webp",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747aa",
  },
  {
    name: "Omantel",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/33663014-a377-41b0-9bdc-2ecbc03e3a26_omantel.webp",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747ab",
  },
  {
    name: "Ahlibank",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/de0fc9da-f50d-46d5-8446-54ae55e3113b_ahlibank.webp",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747ac",
  },
  {
    name: "COMEX",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/24536928-92c8-4282-b563-979fe208b24d_comex.webp",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747cc",
  },
  {
    name: "SQU",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/c39504e6-d025-4e18-865b-6d0de2d067f4_squ.webp",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747cd",
  },
  {
    name: "Oman Housing Bank",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/5ec67098-7b5e-45a1-9a0f-ff7d0df25d31_oman-housing-bank.webp",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747ce",
  },
  {
    name: "Bayan",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/2b235413-468f-4480-ad37-7a00e51c0222_bayan.webp",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747cf",
  },
  {
    name: "PDO",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/83667358-0c47-477e-b7c9-becbf26512eb_pdo.webp",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747d0",
  },
  {
    name: "Oxy",
    logoUrl: "https://d25v7zplue52c7.cloudfront.net/uploads/v2/global/GlobalConfig/images/f4f58826-8122-4b7d-ae0a-41f3ef573a46_oxy.webp",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747d1",
  },
];

export default function PartnersSection() {
  const { config } = useGlobalConfig();
  const clientLogos = config?.partnerLogos?.length ? config.partnerLogos : defaultClientLogos;

  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#000000',
        py: { xs: 1, md: 1 },
      }}
    >
      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <HorizontalCarousel
          items={clientLogos}
          showBorders={true}
          maxWidth="xl"
          itemHeight={{ xs: 48, sm: 60, md: 72 }}
          itemMaxWidth={{ xs: 140, sm: 180, md: 220 }}
          containerPadding={{ xs: 3, md: 4.5 }}
          itemPadding={{ xs: 4, sm: 5 }}
          pauseOnHover={true}
        />
      </MotionBox>
    </Box>
  );
}
