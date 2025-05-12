"use client";

import { Image } from "@heroui/image";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { Icon } from "@iconify/react";

export default function Comparison() {
    return (
        <section className="py-32 px-6 bg-black pb-96 relative">
            <div className="max-w-7xl mx-auto text-center mb-16 text-white">
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight mb-8">
                    NEO vs. Other Energy Drinks
                </h2>
                <p className="text-xl opacity-90">
                    Discover how NEO stands above the rest with clean, natural power.
                </p>
            </div>

            <div className="max-w-5xl mx-auto text-gray-100">
                <Table classNames={{ wrapper: "bg-white/20", th: "bg-white/10 text-white" }}>
                    <TableHeader>
                        <TableColumn className="text-xl">Feature</TableColumn>
                        <TableColumn className="text-xl">NEO</TableColumn>
                        <TableColumn className="text-xl">Other Energy Drinks</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-md">Sugar Content</TableCell>
                            <TableCell className="text-md font-semibold">0g</TableCell>
                            <TableCell className="text-md">Up to 30g</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-md">Energy Source</TableCell>
                            <TableCell className="text-md font-semibold">Natural Caffeine & Green Tea</TableCell>
                            <TableCell className="text-md">Synthetic Caffeine & Sugar</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-md">Crash Effect</TableCell>
                            <TableCell className="text-md font-semibold">None</TableCell>
                            <TableCell className="text-md">Very Likely</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-md">Additives</TableCell>
                            <TableCell className="text-md font-semibold">No Artificial Additives</TableCell>
                            <TableCell className="text-md">Often Includes Additives</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-md">Focus & Performance</TableCell>
                            <TableCell className="text-md font-semibold">Sustained & Clear</TableCell>
                            <TableCell className="text-md">Short Burst</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="absolute -bottom-52 left-1/2 -translate-x-1/2">
                <Image src="/ctaCan.png" className="h-[30rem]" />
            </div>
        </section>
    );
}