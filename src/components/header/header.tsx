import '../../app/globals.css'
import Link from 'next/link';

export default function Header() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-12">
                <div className='col-span-2'>01</div>
                <div className='col-span-8 flex justify-center'>02</div>
                <div className='col-span-2 flex justify-end'>03</div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2 bg-red-200">A</div>
                <div className="col-span-8 bg-green-200">B</div>
                <div className="col-span-2 bg-blue-200">C</div>
            </div>
        </div>
    );
};