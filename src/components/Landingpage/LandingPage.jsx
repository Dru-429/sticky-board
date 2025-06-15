"use client"

import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/button'
import { easeIn, easeInOut, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='h-screen w-screen bg-slate-950 flex justify-center items-center '>
      <div className='w-1/2 relative flex justify-center items-center flex-col'>
        <div className='relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-800  text-center font-sans font-bold'>
          Sticky Notes
        </div>
        <p className='text-lg md:text-md text-slate-400 font-semibold text-center p-2 mb-5 w-full flex flex-col items-center'>
          {/* Sticky Notes is a minimalist, fast, and collaborative note-taking tool for everyday thoughts.
          Built with Next.js, TypeScript, powered by Appwrite for real-time storage, and designed using Aceternity UI */}

          <motion.p
            initial={{ width: 0 }}
            animate={{ width: 800 }}
            transition={{ duration: 4, ease: easeInOut }}
            className="overflow-hidden whitespace-nowrap"
          >
            Sticky Notes is a minimalist, fast, and collaborative note-taking tool for 
          </motion.p>
          <motion.p
            initial={{ width: 0 }}
            animate={{ width: 500 }}
            transition={{ duration: 3, delay:2 }}
            className="overflow-hidden whitespace-nowrap text-center"
          >
            everyday thoughts. Built with Next.js, TypeScript, powered by Appwrite for 
          </motion.p>
          <motion.p
            initial={{ width: 0 }}
            animate={{ width: 500 }}
            transition={{ duration: 2, delay:5 }}
            className="overflow-hidden whitespace-nowrap text-center"
          >
            real-time storage, and designed using Aceternity UI

          </motion.p>

        </p>

        <motion.div
          className='cursor-pointer z-10 w-fit'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: easeIn, delay: 6 }}
        >
          <Button
            variant={'secondary'}
            asChild
          >
            <Link
              href="/notes"
            >
              Try Out Now
            </Link>
          </Button>
        </motion.div>
  
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default LandingPage