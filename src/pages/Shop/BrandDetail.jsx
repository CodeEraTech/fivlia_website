import React, { useEffect, useState } from 'react';
import { get } from '../../apis/apiClient';
import { ENDPOINTS, getImageUrl } from '../../apis/endpoints';
import ProductItem from '../../ProductList/ProductItem';
import ProductShimmer from '../../ProductList/ProductShimmer';
import { useSearchParams } from 'react-router-dom';

const BrandDetail = () => {
  const [searchParams] = useSearchParams();
  const brandId = searchParams.get('id');

  const [brand, setBrand] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await get(`${ENDPOINTS.BRANDS}?id=${brandId}`);
        const brandData = response?.data?.brand || {};
        const productList = response?.data?.products || [];

        const processedProducts = productList.map((prod) => ({
          id: prod._id,
          name: prod.productName,
          description: prod.description,
          image: getImageUrl(prod.productImageUrl?.[0] || prod.productThumbnailUrl),
          price: prod.variants?.[0]?.sell_price || prod.sell_price || 0,
          mrp: prod.variants?.[0]?.mrp || prod.mrp || 0,
          category: prod.category?.[0]?.name || 'Category',
          category_id: prod.category?.[0]?._id || '',
          brand: prod.brand_Name?.name || brandData?.brandName || '',
          unit: prod.unit?.name || '',
          tax: prod.tax || 0,
          rating: 4.5,
          review_count: 0,
          discount_percentage: prod.variants?.[0]?.discountValue || 0,
          is_hot: prod.feature_product || false,
          is_new: prod.ribbon?.toLowerCase() === 'new',
          sku: prod.sku,
          status: prod.status,
          inCart: prod.inCart?.status || false,
          variants: prod.variants || [],
        }));

        setBrand(brandData);
        setProducts(processedProducts);
      } catch (err) {
        console.error('Error fetching brand details:', err);
        setError('Something went wrong while fetching brand details.');
      } finally {
        setLoading(false);
      }
    };

    if (brandId) {
      fetchBrandData();
    } else {
      setError('Invalid brand ID.');
      setLoading(false);
    }
  }, [brandId]);

  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        {brand?.brandLogo || brand?.brandName ? (
          <div className="row align-items-center text-center mb-6">
            <div className="col-12">
              {brand?.brandLogo && (
                <img
                  src={getImageUrl(brand.brandLogo)}
                  alt={brand.brandName}
                  style={{ maxHeight: 80, marginBottom: 20 }}
                />
              )}
              <div className="section-head mt-2">
                <h3 className="h3style" data-title={brand?.brandName || 'Brand'}>
                  {brand?.brandName || 'Brand'}
                </h3>
                <div className="wt-separator bg-primarys"></div>
                <div className="wt-separator2 bg-primarys"></div>
              </div>
            </div>
          </div>
        ) : null}

        {loading ? (
          <div className="row">
            <div className="col-12 text-center">
              <ProductShimmer count={10} />
            </div>
          </div>
        ) : error ? (
          <div className="row">
            <div className="col-12 text-center">
              <div className="alert alert-danger">{error}</div>
            </div>
          </div>
        ) : products.length === 0 ? (
          <div className="row">
            <div className="col-12 text-center">
              <div className="alert alert-warning">No products found for this brand.</div>
            </div>
          </div>
        ) : (
          <ProductItem products={products} />
        )}
      </div>
    </section>
  );
};

export default BrandDetail;
