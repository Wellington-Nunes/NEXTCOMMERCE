interface ProductPageProps {
    params: {
        id: string;
    };
}

const ProductPage = ({ params }: ProductPageProps) => {
    const { id } = params;
    return (
        <div
        >
            <p>Página de detalhes do produto: {id}</p>
        </div >

    );
}

export default ProductPage;