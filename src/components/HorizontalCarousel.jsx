"use client";
import { Box, Container } from "@mui/material";
import { keyframes } from "@mui/system";

const marqueeMany = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const marqueeFew = keyframes`
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const normalizeUrl = (url) => {
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
};

function CarouselItem({ item, itemHeight, itemMaxWidth, itemPadding }) {
  const clickable = !!item.website;
  const Wrapper = clickable ? "a" : "div";

  return (
    <Box
      component={Wrapper}
      href={clickable ? normalizeUrl(item.website) : undefined}
      target={clickable ? "_blank" : undefined}
      rel={clickable ? "noopener noreferrer" : undefined}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: itemPadding,
        opacity: 0.75,
        transition: "opacity 0.2s ease",
        textDecoration: "none",
        flexShrink: 0,
        "&:hover": { opacity: 1 },
      }}
    >
      <Box
        component="img"
        src={item.logoUrl}
        alt={item.name || "partner logo"}
        sx={{
          height: itemHeight,
          maxWidth: itemMaxWidth,
          objectFit: "contain",
          display: "block",
          filter: "brightness(1.5) contrast(1.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            filter: "brightness(2) contrast(1.2)",
            transform: "scale(1.05)",
          },
        }}
      />
    </Box>
  );
}

export default function HorizontalCarousel({
  items = [],
  showBorders = false,
  maxWidth = "xl",
  itemHeight = { xs: 28, sm: 34, md: 40 },
  itemMaxWidth = { xs: 100, sm: 130, md: 150 },
  containerPadding = { xs: 2, md: 3 },
  itemPadding = { xs: 2, sm: 3 },
  pauseOnHover = true,
  reducedMotionSupport = true,
}) {
  const validItems = Array.isArray(items)
    ? items.filter((item) => !!item?.logoUrl)
    : [];

  if (!validItems.length) return null;

  const isFew = validItems.length <= 5;
  const duration = isFew
    ? Math.max(15, Math.min(20, validItems.length * 6))
    : 30;

  return (
    <Box
      sx={(theme) => ({
        py: containerPadding,
        position: "relative",
        overflow: "hidden",
        ...(showBorders && {
          borderTop: `1px solid rgba(255,255,255,0.06)`,
          borderBottom: `1px solid rgba(255,255,255,0.06)`,
        }),
        ...(reducedMotionSupport && {
          "@media (prefers-reduced-motion: reduce)": {
            "& *": { animation: "none !important" },
          },
        }),
      })}
    >
      <Container
        maxWidth={maxWidth}
        sx={{
          overflow: "hidden",
          position: "relative",
          /* fade edges */
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          px: "0 !important",
          maxWidth: "100% !important",
        }}
      >
        <Box sx={{ direction: "ltr" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              width: "max-content",
              animation: `${isFew ? marqueeFew : marqueeMany} ${duration}s linear infinite`,
              ...(pauseOnHover && {
                "&:hover": { animationPlayState: "paused" },
              }),
            }}
          >
            {isFew ? (
              validItems.map((item, i) => (
                <CarouselItem
                  key={`few-${item._id || i}`}
                  item={item}
                  itemHeight={itemHeight}
                  itemMaxWidth={itemMaxWidth}
                  itemPadding={itemPadding}
                />
              ))
            ) : (
              <>
                {validItems.map((item, i) => (
                  <CarouselItem
                    key={`a-${item._id || i}`}
                    item={item}
                    itemHeight={itemHeight}
                    itemMaxWidth={itemMaxWidth}
                    itemPadding={itemPadding}
                  />
                ))}
                {validItems.map((item, i) => (
                  <CarouselItem
                    key={`b-${item._id || i}`}
                    item={item}
                    itemHeight={itemHeight}
                    itemMaxWidth={itemMaxWidth}
                    itemPadding={itemPadding}
                  />
                ))}
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
