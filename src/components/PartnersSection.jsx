'use client';
import React from 'react';
import { Box } from '@mui/material';
import HorizontalCarousel from './HorizontalCarousel';

const clientLogos = [
  {
    name: "Takaful Oman",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822090/EventPassSuite/images/rqjuebfk9o4xvafy0sqj.png",
    website: "",
    _id: "68e4c10c1d9f2bd1d5d7477f",
  },
  {
    name: "Oman Cables",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822090/EventPassSuite/images/oixvmap0rnhu8dcmjshb.png",
    website: "",
    _id: "68e4c10c1d9f2bd1d5d74780",
  },
  {
    name: "MEIRA",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822091/EventPassSuite/images/hmgbfdjaghdlddscllaa.png",
    website: "",
    _id: "68e4c10c1d9f2bd1d5d74781",
  },
  {
    name: "MTCIT",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822431/EventPassSuite/images/nwilyshmgrnspbiosvou.png",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747a7",
  },
  {
    name: "OCEC",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822432/EventPassSuite/images/h3xchjnmzphlv5ig6idp.png",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747a8",
  },
  {
    name: "Dhofar Insurance",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822433/EventPassSuite/images/sszn20fxrdtl4bhzoxdo.png",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747a9",
  },
  {
    name: "Vodafone",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822434/EventPassSuite/images/uzctadc9rdbo5ixpp3v3.png",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747aa",
  },
  {
    name: "Omantel",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822435/EventPassSuite/images/ie5gp5vswzsqspozetyt.png",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747ab",
  },
  {
    name: "Ahlibank",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822435/EventPassSuite/images/quxdny0rjn0q4yg8t4ss.png",
    website: "",
    _id: "68e4c2641d9f2bd1d5d747ac",
  },
  {
    name: "COMEX",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822616/EventPassSuite/images/ys3w3ighstlrvcttudxg.png",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747cc",
  },
  {
    name: "SQU",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822618/EventPassSuite/images/onvrmkyqegld1saqkhct.png",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747cd",
  },
  {
    name: "Oman Housing Bank",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822619/EventPassSuite/images/eq5ee0zvts7b2b9ecvxh.png",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747ce",
  },
  {
    name: "Bayan",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822620/EventPassSuite/images/zugijc9yp7dady5ayje0.jpg",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747cf",
  },
  {
    name: "PDO",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822620/EventPassSuite/images/ezbqzoap054tclglqjqu.png",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747d0",
  },
  {
    name: "Oxy",
    logoUrl: "https://res.cloudinary.com/dwva39slo/image/upload/v1759822621/EventPassSuite/images/hbrcmzvlcrfkepdzikwk.png",
    website: "",
    _id: "68e4c31e1d9f2bd1d5d747d1",
  },
];

export default function PartnersSection() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#000000',
        py: { xs: 1, md: 1 },
      }}
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
    </Box>
  );
}
