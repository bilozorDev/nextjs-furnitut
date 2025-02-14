import { FetchCategoryDocument } from '@/generated/graphql';
import { apiRequest } from '@/utils/api-request';
import { Product } from '@/components/product';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Blocks } from '@/components/blocks';
import classnames from 'classnames';

type ProductsProps = {
    params: Promise<{ category: string }>;
};

const fetchData = async (path: string) => {
    const response = await apiRequest(FetchCategoryDocument, { path });
    const { blocks, breadcrumbs, name, children } = response.data.browse?.category?.hits?.[0] ?? {};

    return {
        name,
        blocks,
        breadcrumbs: breadcrumbs?.[0]?.filter((item) => !!item),
        children: children?.hits?.filter((item) => item?.__typename === 'product'),
    };
};

export default async function Products(props: ProductsProps) {
    const params = await props.params;
    const { breadcrumbs, name, blocks, children } = await fetchData(`/products/${params.category}`);

    return (
        <main>
            <div className="page  pb-6">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <h1 className="text-4xl font-bold py-4">{name}</h1>
            </div>
            <div className={classnames('flex flex-col items-center pt-12', !!blocks?.length && 'pb-12')}>
                <Blocks blocks={blocks} />
            </div>
            <div className={classnames('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-2xl mx-auto px-4 2xl:px-0')}>
                {children?.map((child) => <Product key={child?.path} product={child} />)}
            </div>
        </main>
    );
}
