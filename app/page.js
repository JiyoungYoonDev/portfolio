'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import MyTech from "@/components/MyTech";

export default function Home() {
  return (
    <>
      {/* min-h-screen 최소높이를 화면 높이로 설정 */}
      <main className="flex min-h-screen flex-col mx-0 sm:p-14 sm:mx-24">
        <Header />
        <div className="divide-section">
          <MyTech />
        </div>
      </main>
    </>
  );
}
