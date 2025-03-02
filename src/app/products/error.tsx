"use client";

const ProductsError = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    return (
        <div>
            <h2>Erro ao carregar produtos</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Tentar novamente</button>
        </div>
    );
};

export default ProductsError;