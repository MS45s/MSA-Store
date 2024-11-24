import dbCard from '../dbCard';
//deklarasi masing2 category
const kamera = dbCard.filter((item) => item.category === 'Kamera');
const accessories = dbCard.filter((item) => item.category === 'Aksesori Kamera');
const gadget = dbCard.filter((item) => item.category === 'Gadget Pendukung');
const mikrofon = dbCard.filter((item) => item.category === 'Mikrofon dan Audio');
//membuat card
const Card = () => {
    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
            {kamera.map((kamera) => (
                <>
                    <div className="m-2 p-3 border rounded-lg shadow-lg" style={{ width: '200px' }}>
                        <div className="container h-72">
                            <div className="relative">
                                <img src={kamera.image} alt="" className="rounded-lg w-full h-40 object-cover" />
                            </div>
                            <div className="mt-3 text-lg font-semibold">
                                {kamera.name}
                            </div>
                        </div>
                        <div className="mt-3 text-xl font-bold text-gray-800">
                            Rp.{kamera.price}
                        </div>
                    </div>
                </>
            ))}
            {accessories.map((aksesoris) => (
                <div className="m-2 p-3 border rounded-lg shadow-lg" style={{ width: '200px' }}>
                    <div className="container h-72">
                        <div className="relative">
                            <img src={aksesoris.image} alt="" className="rounded-lg w-full h-40 object-cover" />
                        </div>
                        <div className="mt-3 text-lg font-semibold">
                            {aksesoris.name}
                        </div>
                    </div>
                    <div className="mt-3 text-xl font-bold text-gray-800">
                        Rp.{aksesoris.price}
                    </div>
                </div>
            ))}
            {gadget.map((gadget) => (
                <div className="m-2 p-3 border rounded-lg shadow-lg" style={{ width: '200px' }}>
                    <div className="container h-72">
                        <div className="relative">
                            <img src={gadget.image} alt="" className="rounded-lg w-full h-40 object-cover" />
                        </div>
                        <div className="mt-3 text-lg font-semibold">
                            {gadget.name}
                        </div>
                    </div>
                    <div className="mt-3 text-xl font-bold text-gray-800">
                        Rp.{gadget.price}
                    </div>
                </div>
            ))}
            {mikrofon.map((mikrofon) => (
                <div className="m-2 p-3 border rounded-lg shadow-lg" style={{ width: '200px' }}>
                    <div className="container h-72">
                        <div className="relative">
                            <img src={mikrofon.image} alt="" className="rounded-lg w-full h-40 object-cover" />
                        </div>
                        <div className="mt-3 text-lg font-semibold">
                            {mikrofon.name}
                        </div>
                    </div>
                    <div className="mt-3 text-xl font-bold text-gray-800">
                        Rp.{mikrofon.price}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Card;