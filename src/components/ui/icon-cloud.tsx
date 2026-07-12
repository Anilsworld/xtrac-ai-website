import { useEffect, useMemo, useState } from 'react'
import {
  Cloud,
  fetchSimpleIcons,
  type ICloud,
  renderSimpleIcon,
  type SimpleIcon,
} from 'react-icon-cloud'
import { useTheme } from '@/components/theme-provider'

export const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 8,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.035,
    minSpeed: 0.018,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === 'light' ? '#eef2f8' : '#0b1220'
  const fallbackHex = theme === 'light' ? '#334155' : '#e2e8f0'
  const minContrastRatio = theme === 'dark' ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  })
}

export type DynamicCloudProps = { iconSlugs: string[] }
type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

/** Interactive 3D rotating cloud of brand icons (Simple Icons). Theme-aware. */
export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs })
      .then(setData)
      .catch(() => setData(null))
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null
    return Object.values(data.simpleIcons).map((icon) => renderCustomIcon(icon, theme))
  }, [data, theme])

  return (
    // @ts-ignore — react-icon-cloud's Cloud children typing is loose
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  )
}
