"use client"

import React, { useEffect, useRef } from 'react'

interface TechBackgroundProps {
  className?: string
}

export default function TechBackground({ className = '' }: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    // Initialize canvas size
    setCanvasDimensions()
    
    // Update canvas size on window resize
    window.addEventListener('resize', setCanvasDimensions)
    
    // Parameters for the grid
    const gridSize = 30
    const nodeRadius = 1
    const maxConnectionDistance = 100
    const animationSpeed = 0.05
    
    // Create nodes
    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const nodeCount = Math.floor((canvas.width * canvas.height) / 15000)
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * animationSpeed,
        vy: (Math.random() - 0.5) * animationSpeed,
      })
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid
      ctx.strokeStyle = '#8F0D0D15' // Primary color with low opacity
      ctx.lineWidth = 0.5
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // Update and draw nodes
      nodes.forEach(node => {
        // Update position
        node.x += node.vx
        node.y += node.vy
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx = -node.vx
        if (node.y < 0 || node.y > canvas.height) node.vy = -node.vy
        
        // Draw node
        ctx.fillStyle = '#8F0D0D40' // Primary color with low opacity
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2)
        ctx.fill()
      })
      
      // Draw connections between nodes
      ctx.strokeStyle = '#8F0D0D20' // Primary color with low opacity
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxConnectionDistance) {
            ctx.lineWidth = 0.5 * (1 - distance / maxConnectionDistance)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
      
      requestAnimationFrame(animate)
    }
    
    // Start animation
    animate()
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  )
}