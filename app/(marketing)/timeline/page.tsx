'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { AnnouncementBanner } from '#components/announcement-banner'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineIcon,
  TimelineTrack,
  TimelineContent,
} from '@saas-ui/react'

export const meta: Metadata = {
  title: 'Blumemail',
  description: 'Safety and privacy in the 21st century.',
}

const Home: NextPage = () => {
  return (
    <Box>      
      <TimelineSection/>
    </Box>
  )
}

const TimelineSection = () => {
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <BackgroundGradient height="100%" zIndex="-1"/>
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
    <Timeline variant={"outline"}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineIcon color={"primary.500"} _dark={{ color: 'primary.500'}} />
          <TimelineTrack />
        </TimelineSeparator>
        <TimelineContent fontSize={"30"}>⚙️ Blumemail Prebeta</TimelineContent>
        <TimelineContent>Blumemail was working behind the scenes to prepare for launching.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineTrack />
          <TimelineIcon color="cyan.500" _dark={{ color: 'cyan.500' }} />
          <TimelineTrack />
        </TimelineSeparator>
        <TimelineContent fontSize={"30"}>🚪 Blumemail Beta</TimelineContent>
        <TimelineContent>Blumemail entered its beta phase, allowing <Br/> its doors to slightly open.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineTrack />
          <TimelineIcon color="green.500" _dark={{ color: 'green.500' }} />
          <TimelineTrack />
        </TimelineSeparator>
        <TimelineContent fontSize={"30"}>🥳 Blumemail Launched!</TimelineContent>
        <TimelineContent>Blumemail has officially launched after 2 months of <Br/> internal development.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineTrack />
          <TimelineIcon color="red.500" _dark={{ color: 'red.500' }} />
          <TimelineTrack />
        </TimelineSeparator>
        <TimelineContent fontSize={"30"}>Announement of Note-Sharing platform.</TimelineContent>
        <TimelineContent>Blumemail announces its new note-sharing platform. <Text textColor={"red.600"}>UNDER DEVELOPMENT.</Text></TimelineContent>
      </TimelineItem>
    </Timeline>
    </Container>
    </Box>
  )
}


export default Home
