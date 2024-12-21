import React from 'react';
import ProductCard from '../ProductCard';
import './ProductGrid.css';

const products = [
    { id: 1, image: 'https://s3-alpha-sig.figma.com/img/83a0/9b04/2d4db129912953ae38cad13073fa2239?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WRlqEcwoMq~809-3CuqU9id9KYgqCGOwTmb01d1wHyk2kTql9aCz7WRCOllRKgsiS0TzZClymkvYeWM34OQfzaFXDXEDFbQGH-1MYIMq0ke7Gx2t2nD5Jb0-qdr0bgHbUd-~UUwP6qnHxsi1Gm3fdljes0IkCR25wfLW3sp-nk33CMDxqsOHCVThhwWeC-pZ62aoqrkIkoJo9y8bnwbsgxGZ2HD-UUdkfGGtSedP1lvLvu3OSYnykSD3bI26-6HkMIv7BlLXlhFo8-jdZuc0rAY361hB0DmwDMOhKl8U~4FAhQMS5bbQjvwrg-pzPzp~9arAHqgKbh-DF4lGspOnow__', name: 'Plain White Shirt', price: 29.0 },
    { id: 2, image: 'https://s3-alpha-sig.figma.com/img/282d/594e/e61c99afe0628b20858a8bf64dcdc6e3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nn1njBsEz9jqTvodEOFSNf5KdrR4aMIOzSak5w7WDLOj3oIf-RN3KL-0PLSS5UIZCIb4YWIwI44V7GQLi5fz2deVL4bOuePRT0S6V~DnPTf8gAMMsdSzju~WywgzoafwdCZbWKlTb~0fgzLoDhLfHGfV3-kYcj1wfU3za12BJ3iWFc~vV~m-mvQVtqPIX0jOxenSfwSGIZXI6ognKOlCgieOzdNf6C40~-tjVeUOZXkAx3lfUtJcM52EGP27t8aKsbyx65FepKD1n7kzuC7E1mCeNAalVkSOjkeFKQaFqBli7Fr4lGeauJXWaxmi1G0CkzdEplmUJ0VBV02Ne5-lhQ__', name: 'Denim Jacket', price: 69.0 },
    { id: 3, image: 'https://s3-alpha-sig.figma.com/img/c47e/201f/bb97ad1f124d9ac71dae955ef4ef1fe9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hXKQAO2K9P55vkkme9psG2fWYSyDO0h3KUbrGeSRDml5HqHZbh7ObvAqMY~7hf~q4x~eGQrW2QVODuQt6dcTth3fugrwEOWqKBSat3jx6cqF47IW1Td~FwkqAHtWFgOHvRqBPV5Gxa1cO0EGhjqePx49NyjXhoWSx8wlM-1g5~dlyAvCd5BoqFI6gryrwWioD6jT2D~5ciBIgWDLrQ8AKObOJRrsps0ac0VCHVF3f0CW5xlqHJfSvfylq-u2gggOB21Bu8K0-hA7flpKr~EpAOwlXPKCLzKVpOfHPKJoWvEbi3CoxUQMPaId5Cz77U6khKYgSORPoTVYWHPsJ5EiyQ__', name: 'Black Polo Shirt', price: 49.0 },
    { id: 4, image: 'https://s3-alpha-sig.figma.com/img/145d/9cd5/15b25cb6cab25d500c32794f4fcaeb33?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iZ2i6BWeYpghaBYMuJYUwMpfR7e7W5Aaklreb6hHMIXdxzzXKpoUDJJbf95QOeO2SRINNj5WidSf5rnjCuvAb9QlYn9uVeAh8iQ6YalwFaJGNiJYpW3Iy2y8z0GG~SmhCnmP6zESEwuVE6sAfGNnokcaB5jyyCp2EWiPTXy39tf4WhUrHZQXdFt-dllM7YOgzXi~xqz7P6rDUIu4N5TZgcvGGHBCYvGUvONVX69S65I6pooPWjVHI~VJCapNV0DLs6WJyomlO-2-vtyHcqHiw-734HFspCr~i8pR3hbijM3T~TzDYJdkGCweQYyaP5OSR1s-t68D0hQpL0hfOiToWQ__', name: 'Blue Sweatshirt', price: 79.0 },
    { id: 5, image: 'https://s3-alpha-sig.figma.com/img/e3d9/7fd9/2a581d4587bb2d6bca3d00fcb6b53785?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMkrAP2Qawuu~8kFkdY6m5v~pGdZvQbS2g01j2q7bdDHefZVKLsPHPcB9gQP74gq6uYDiU3-q4q4TOYmNQaEFhX5IP9oekQF3Zp2BREjBQ-LSseAbPwPvPuQjjjD6pRcABX7D-NBYb39eiZDuYXmgHPy2EGWGcpQ7~LwBmnQqB-8b4ZQ6h61B55dhahOt~rBJlHNA8dMacn4hGuz5M3nskiNdkC76YM9wC8s9zHEmcM8dB1lUA3CnPkWJ92~Cs~kVAPks0P3opnTZZxmrTiZpSACte3fuYBiy9yZmOeLD2128fLcF3~ZOnLPBx8fedW3vupCqD5TjZMhT6iIvO99MA__', name: 'Blue Plain Shirt', price: 49.0 },
    { id: 6, image: 'https://s3-alpha-sig.figma.com/img/585b/4560/d2543c483af597db445b8913be298793?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhtIhqKJXXAaEUR4cdbKOFVeuH-bCoxrYmMybB9HlkfrbvJG6y0lGRSNdEpklLZZbAzz53S6gJCsp-CqVxv2pm19Fc2Gj6rLrkgd2CSkjnLnYFSDCq74CQl6m8vKhfsUhtPUzk6mLxPeKKzLAdg2rFFufq9o0VYh-L8B3ikG3LHOHUgWL3LhwjiM4ZoxpNOH9xcMRNBkhaXl-z2Fo0FbGc-NSv2MULm-DPBCJyOOijJrbfXBSZ-O9Rsy-XLAO4hxiCDWj8Q8Lto1xSnJyAc-oFt8QUD5NR5kLAknX7RPZKWJFrQ24hj2PT0h6s0RyR8lTjwmsn6YcCagC5ZI-Jyuhw__', name: 'Dark Blue Shirt', price: 89.0 },
    { id: 7, image: 'https://s3-alpha-sig.figma.com/img/09ad/7977/5a7571e0aeebf22860d85ebdfce7a08a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nGEYEqr1-uNJ8Ol~IwD~L-i6P5UfaPmaGXNBgaZrGK6y~ECt5VfEhp2MNBC0VR1R93EBmjQ7avTgmU3BAYtjrQzoXcAEJbOfIecln0muxJt7B8gHj3G16qBZs-odfDS7x63NovxHtI0YSKLAPs6Fy4K3XF8q8jprAwD9FpJpguGQz8jg2ZW9CIsHTkQ84iG-oJa6L1a4YIIRDInVz~SrTLGq5x72FCiIkeTiaZ4-dMFxNI7U12yaXIdzt6I~4mTwFJEsshsEm3XwVJsjMkmlEZE6pJmBmsZQ2Crb6BEZ17HSIc~fFg-rmLLX90Yjnf5asJrWkASjp~PWemS97mOrpQ__', name: 'Outcast T Shirt', price: 19.0 },
    { id: 8, image: 'https://s3-alpha-sig.figma.com/img/ecd7/c0aa/24878bbe063cd505d7e06eb3ed39a5e1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bCbs0AtZ0c442LhDaKK1u7fBR-jvfq25VzBdANYODioB~IiIgOacR7ReITXsugno8zbGr56Pycmt45eQw9hdWOCcvePmbGBxzPMhUayKeW28VDJOhw6i9TtaMRZc9IHR-UEPeK3QIiqwwSgSSGurl3VKKHoyyPuYa0GJe2PgkZGVnNXMN0o0z2NxdSmqDyG0HHdOxURARt4t9YEeJlHi3tNImXwSM0vvBKwKrysCW-70doI6ov8CcVklCypJhIKx~TBaPgFVOCNz2MMFVPMWRChbaB5n~tStX9Arw9d~D72KV4issLC5-yG~qDEG3S8bXjwiXtEw2sIRyXAkWCEsCg__', name: 'Polo Plain Shirt', price: 29.0 },
  ];
  


const ProductGrid = () => {
  return (
    <div className="product-grid">
      <h2>Discover NEW Arrivals</h2>
      <p>Recently added shirts!</p>
      <div className="grid-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
