---
name: "Umbrel"
description: "Design tokens extracted from https://umbrel.com/?country=MW"
colors:
  primary: "#0000EE"
  secondary: "#FFFFFF"
  surface: "#636363"
  on-surface: "#101010"
typography:
  text-1:
    fontFamily: "Inter"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: 1.2
  text-2:
    fontFamily: "Inter Display"
    fontSize: "43px"
    fontWeight: 600
    lineHeight: 1.2
  text-3:
    fontFamily: "Inter"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.2
  text-4:
    fontFamily: "Inter"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.2
  text-5:
    fontFamily: "Inter"
    fontSize: "27px"
    fontWeight: 600
    lineHeight: 1.2
  text-6:
    fontFamily: "Inter"
    fontSize: "27px"
    fontWeight: 500
    lineHeight: 1.1
  text-7:
    fontFamily: "Inter"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.1
  text-8:
    fontFamily: "Inter"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.1
  text-9:
    fontFamily: "sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.5
  text-10:
    fontFamily: "Inter"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.1
  text-11:
    fontFamily: "Inter Variable"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.3
  text-12:
    fontFamily: "Inter Variable"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.3
  text-13:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
  text-14:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.2
  text-15:
    fontFamily: "sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
  text-16:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.24
  text-17:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
  text-18:
    fontFamily: "Roboto Condensed"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.24
  text-19:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "\"blwf\", \"cv03\", \"cv04\", \"cv09\", \"cv11\""
  text-20:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.2
  text-21:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.3
  text-22:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.3
  text-23:
    fontFamily: "Manrope"
    fontSize: "12.96px"
    fontWeight: 500
    lineHeight: 1.2
  text-24:
    fontFamily: "sans-serif"
    fontSize: "12px"
    fontWeight: 400
  text-25:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
  text-26:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
  text-27:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 400
  text-28:
    fontFamily: "sans-serif"
    fontSize: "12px"
    fontWeight: 400
  text-29:
    fontFamily: "Inter Tight"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
  text-30:
    fontFamily: "Inter Tight"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
spacing:
  base: "8px"
  xs: "1px"
  sm: "2px"
  md: "3px"
  lg: "8px"
  xl: "10px"
  xxl: "12px"
  xxxl: "12.8px"
  xxxxl: "14px"
rounded:
  sm: "2.5px"
  md: "5px"
  lg: "6px"
  xl: "7px"
  full: "9999px"
components:
  button-observed:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    rounded: "93px"
    padding: "12px 16px"
  input-observed:
    textColor: "{colors.secondary}"
    rounded: "20px"
    padding: "14px 10px"
---

# Design System

## Overview
Design tokens extracted from umbrel.com. The YAML front matter contains machine-readable values observed by Dembrandt when available; the sections below summarize the extracted evidence without redesigning or correcting the source site.

## Colors
- **Primary** (#0000EE): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Secondary** (#FFFFFF): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **Surface** (#636363): Observed color token extracted from the site's palette, semantic CSS, or component styles.
- **On Surface** (#101010): Observed color token extracted from the site's palette, semantic CSS, or component styles.

## Typography
- **Text 1**: Inter, 48px, semi-bold
- **Text 2**: Inter Display, 43px, semi-bold
- **Text 3**: Inter, 36px, bold
- **Text 4**: Inter, 32px, semi-bold
- **Text 5**: Inter, 27px, semi-bold
- **Text 6**: Inter, 27px, medium

## Layout
Observed spacing scale: 8px spacing scale.
- **Spacing tokens**: base 8px, xs 1px, sm 2px, md 3px, lg 8px, xl 10px, xxl 12px, xxxl 12.8px, xxxxl 14px
- **Responsive breakpoints**: 98px, 810px

## Elevation & Depth
Observed box-shadow styles: rgba(255, 255, 255, 0.16) 0px 0.8px 0.8px 0px inset; rgba(255, 255, 255, 0.04) 0.972px 0px 0px 0px inset, rgba(255, 255, 255, 0.04) -0.972px 0px 0px 0px inset, rgba(255, 255, 255, 0.1) 0px 0.972px 0px 0px inset, rgba(255, 255, 255, 0.1) 0px 0.486px 0px 0px inset; rgba(0, 0, 0, 0.24) -12px -12px 32px 0px

## Shapes
Observed rounded-corner tokens: sm 2.5px, md 5px, lg 6px, xl 7px, full 9999px.

## Components
- **Buttons**: Observed sample with radius 93px, background #FFFFFF, text #0000EE, padding 12px 16px
- **Inputs**: Observed sample with 20px radius
