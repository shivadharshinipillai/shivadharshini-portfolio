import { useState } from 'react'
import { SkyDome } from './SkyDome'
import { BackgroundClouds } from './BackgroundClouds'
import { CloudDestination } from './CloudDestination'
import { CameraRig } from './CameraRig'
import { SECTIONS, TIMING, REDUCED_TIMING } from '../../data/sections'

const MOBILE_POSITIONS = {
  about: [-1.75, 1.65, -3.2],
  skills: [1.75, 1.65, -3.2],

  work: [-1.75, 0.15, -3.0],
  experience: [1.75, 0.15, -3.0],

  learning: [-1.75, -1.35, -3.2],
  contact: [1.75, -1.35, -3.2],
}

export function Scene({
  phase,
  selectedSection,
  reducedMotion,
  isMobile,
  onCloudSelect,
}) {
  const [hoveredId, setHoveredId] = useState(null)

  const isLocked = phase !== 'idle'
  const timing = reducedMotion ? REDUCED_TIMING : TIMING

  const target = selectedSection?.position ?? null

  const hoveredSection = SECTIONS.find(
    (section) => section.id === hoveredId
  )

  return (
    <>
      <ambientLight
        color={0x9fb6d6}
        intensity={0.65}
      />

      <directionalLight
        color={0xffe4bc}
        intensity={1.4}
        position={[6, 3, 3]}
      />

      <SkyDome reducedMotion={reducedMotion} />

      <BackgroundClouds
        count={isMobile ? 3 : 10}
        reducedMotion={reducedMotion}
      />

      {SECTIONS.map((section, index) => {
        const mobilePosition = MOBILE_POSITIONS[section.id]

        const responsiveSection =
          isMobile && mobilePosition
            ? {
                ...section,
                position: mobilePosition,
                cloudScale: section.cloudScale * 0.68,
              }
            : section

        return (
          <CloudDestination
            key={section.id}
            section={responsiveSection}
            index={index}
            seed={index * 91 + 7}
            phase={phase}
            isSelected={selectedSection?.id === section.id}
            isLocked={isLocked}
            reducedMotion={reducedMotion}
            onSelect={onCloudSelect}
            onHover={setHoveredId}
          />
        )
      })}

      <CameraRig
        phase={phase}
        target={target}
        hoveredTarget={
          !isLocked
            ? hoveredSection?.position ?? null
            : null
        }
        reducedMotion={reducedMotion}
        isMobile={isMobile}
      />
    </>
  )
}
