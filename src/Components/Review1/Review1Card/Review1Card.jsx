

const Review1Card = ({ name, title, description, rating, image, type }) => {
  return (
    <>
        <div>
            <div className={`rounded-lg p-6 border py-10 mx-4 ${type === 'bg' ? 'bg-white' : 'bg-blue-600'}`}>
                <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                    src={image}
                    alt={name}
                    className="rounded-2xl object-cover w-full h-full"
                    />
                    <div className="absolute top-8 -right-7 bg-white p-1  text-white rounded-full text-xs">
                        <p className=" bg-[#0D5FF9] px-1 py-[6.8px] rounded-full">5.00</p>
                    </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 text-center ${type === 'bg' ? 'text-blue-600' : 'text-white'}`}>{name}</h3>
                <p className={`text-sm mb-2 text-center ${type === 'bg' ? 'text-blue-600' : 'text-white'}`}>{title}</p>
                <p className={`text-sm mb-4 text-center ${type === 'bg' ? 'text-gray-600' : 'text-white'}`}>{description}</p>
                <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (  
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Review1Card