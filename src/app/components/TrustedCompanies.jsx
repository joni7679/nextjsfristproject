import Image from "next/image";

export default function TrustedCompanies() {
    return (
        <section className="bg-sky-100 py-8">
            <div className="max-w-6xl mx-auto text-center px-4">
                <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-6">
                    Trusted by 100+ World’s Best Companies
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    <Image src="/tcs.png" alt="TCS" width={100} height={50} />
                    <Image src="/wipro.png" alt="Wipro" width={100} height={50} />
                    <Image src="/deloitte.png" alt="Deloitte" width={100} height={50} />
                    <Image src="/infosys.png" alt="Infosys" width={100} height={50} />
                    <Image src="/meta.png" alt="Meta" width={100} height={50} />
                </div>
            </div>
        </section>
    );
}
