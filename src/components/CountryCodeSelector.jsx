"use client";

import React, { useState, useMemo } from "react";
import {
    Select,
    MenuItem,
    Box,
    Typography,
    TextField,
    ListSubheader,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE, DEFAULT_ISO_CODE, getFlagImageUrl, getCountryCodeByIsoCode, getCountryCodeByCode } from "@/utils/countryCodes";

const FlagImage = ({ isoCode, country, size = 20 }) => {
    if (!isoCode) {
        return null;
    }

    return (
        <img
            src={getFlagImageUrl(isoCode)}
            alt={country}
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{
                width: `${size}px`,
                height: `${Math.round(size * 0.75)}px`,
                objectFit: "cover",
                borderRadius: "2px",
                display: "block",
            }}
            onError={(event) => {
                event.currentTarget.style.display = "none";
            }}
        />
    );
};

const CountryCodeSelector = ({
    value,
    onChange,
    disabled = false,
    dir = "ltr",
    sx = {},
}) => {
    const [searchQuery, setSearchQuery] = useState("");

    let selectedIsoCode = null;
    if (value) {
        if (/^[a-z]{2,3}$/i.test(value)) {
            selectedIsoCode = value.toLowerCase();
        } else {
            const country = getCountryCodeByCode(value);
            selectedIsoCode = country?.isoCode || DEFAULT_ISO_CODE;
        }
    } else {
        selectedIsoCode = DEFAULT_ISO_CODE;
    }

    const selectedCountry = COUNTRY_CODES.find((cc) => cc.isoCode === selectedIsoCode) ||
        COUNTRY_CODES.find((cc) => cc.isoCode === DEFAULT_ISO_CODE);

    const filteredCountries = useMemo(() => {
        if (!searchQuery.trim()) {
            return COUNTRY_CODES;
        }
        const query = searchQuery.toLowerCase();
        return COUNTRY_CODES.filter(
            (country) =>
                country.country.toLowerCase().includes(query) ||
                country.code.includes(query) ||
                country.isoCode.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    return (
        <Select
            value={selectedIsoCode}
            onChange={(e) => {
                const isoCode = e.target.value;
                onChange(isoCode);
            }}
            disabled={disabled}
            renderValue={(selected) => {
                const country = COUNTRY_CODES.find((cc) => cc.isoCode === selected);
                return (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, pr: 0.5 }}>
                        <Box sx={{ width: 22, display: "flex", justifyContent: "center" }}>
                            <FlagImage isoCode={country?.isoCode} country={country?.country} size={20} />
                        </Box>
                        <span style={{ fontSize: "14px", marginRight: "2px" }}>{country?.code || selected}</span>
                    </Box>
                );
            }}
            sx={{
                height: "100%",
                minHeight: "100%",
                ...sx,
                "& .MuiSelect-select": {
                    py: 1.7,
                    pl: 1.2,
                    pr: "24px !important",
                    minWidth: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    border: "none",
                    "&:focus": {
                        backgroundColor: "transparent",
                    },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                },
                "& .MuiSelect-icon": {
                    right: "4px !important",
                    width: "16px",
                },
            }}
            MenuProps={{
                PaperProps: {
                    sx: {
                        maxHeight: 400,
                    },
                },
                autoFocus: false,
            }}
            onClose={() => setSearchQuery("")}
        >
            <ListSubheader
                sx={{
                    position: "sticky",
                    top: 0,
                    backgroundColor: "background.paper",
                    zIndex: 1,
                    p: 0,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                }}
            >
                <Box sx={{ p: 1.5 }}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search country..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                        InputProps={{
                            startAdornment: (
                                <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
                                    <SearchIcon fontSize="small" />
                                </Box>
                            ),
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "background.default",
                            },
                        }}
                    />
                </Box>
            </ListSubheader>
            {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                    <MenuItem key={country.isoCode} value={country.isoCode}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Box sx={{ width: 22, display: "flex", justifyContent: "center" }}>
                                <FlagImage isoCode={country.isoCode} country={country.country} size={20} />
                            </Box>
                            <Typography variant="body2">
                                {country.country} ({country.code})
                            </Typography>
                        </Box>
                    </MenuItem>
                ))
            ) : (
                <MenuItem disabled>
                    <Typography variant="body2" color="text.secondary">
                        No countries found
                    </Typography>
                </MenuItem>
            )}
        </Select>
    );
};

export default CountryCodeSelector;

