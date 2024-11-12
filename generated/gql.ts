/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query FetchLayout {\n  browse {\n    header: menuItem(path: \"/menu/top\") {\n      hits {\n        children {\n          hits {\n            name\n            ... on menuItem {\n              label\n              link {\n                url\n                item {\n                  items {\n                    path\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.FetchLayoutDocument,
    "query FetchProduct($path: String!) {\n  browse {\n    product(path: $path) {\n      hits {\n        name\n        path\n        description(format: json)\n        breadcrumbs(withShortcuts: false) {\n          name\n          path\n        }\n        brand {\n          items {\n            id\n            name\n            ... on brand {\n              component_name\n              logo {\n                url\n                variants(maxWidth: 200) {\n                  url\n                  height\n                  width\n                }\n              }\n            }\n          }\n        }\n        details {\n          title\n          description\n        }\n        story {\n          title\n          body(format: json)\n          images {\n            key\n            url\n            variants {\n              url\n              width\n              height\n            }\n          }\n        }\n        relatedProducts {\n          items {\n            ... on product {\n              path\n              name\n              variants {\n                firstImage {\n                  url\n                  variants(types: [\"avif\"], maxWidth: 100) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n              defaultVariant {\n                defaultPrice\n                firstImage {\n                  url\n                  variants(types: [\"avif\"], maxWidth: 500) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n        variants {\n          name\n          sku\n          priceVariants\n          defaultPrice\n          attributes\n          dimensions {\n            depth\n            depthUnit\n            height\n            heightUnit\n            width\n            widthUnit\n            weight\n            weightUnit\n          }\n          images {\n            url\n            variants(maxWidth: 800, types: [\"avif\"]) {\n              url\n              key\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.FetchProductDocument,
    "query FetchCategory($path: String!) {\n  browse {\n    category(path: $path) {\n      hits {\n        name\n        breadcrumbs {\n          name\n          path\n          id\n        }\n        blocks {\n          ...blocks\n        }\n        children {\n          hits {\n            __typename\n            ... on product {\n              name\n              path\n              description(format: json)\n              defaultVariant {\n                sku\n                defaultPrice: priceVariants(key: \"default\")\n                firstImage {\n                  url\n                  altText\n                  focalPoint\n                  variants(maxWidth: 500, types: [\"avif\"]) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n              variants {\n                sku\n                isDefault\n                name\n                firstImage {\n                  url\n                  altText\n                  focalPoint\n                  variants(maxWidth: 100, types: [\"avif\"]) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.FetchCategoryDocument,
    "query FetchAllCategories {\n  browse {\n    category(path: \"/products\") {\n      hits {\n        id\n        name\n        breadcrumbs {\n          id\n          name\n          path\n        }\n        blocks {\n          ...blocks\n        }\n        children {\n          hits {\n            id\n            name\n            ... on category {\n              id\n              name\n              path\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.FetchAllCategoriesDocument,
    "query FetchLandingPage {\n  browse {\n    landingPage(path: \"/index\") {\n      hits {\n        name\n        blocks {\n          storySlider {\n            ...storySlider\n          }\n          banner {\n            ...banner\n          }\n          featureHighlights {\n            ...featureHighlights\n          }\n          productSlider {\n            ...productSlider\n          }\n          pictureGrid {\n            ...pictureGrid\n          }\n        }\n      }\n    }\n  }\n}": types.FetchLandingPageDocument,
    "query FetchStory($path: String!) {\n  browse {\n    story(path: $path) {\n      hits {\n        ...storyContent\n        breadcrumbs {\n          path\n          name\n          id\n        }\n        featured {\n          variants {\n            sku\n          }\n          items {\n            path\n            ... on product {\n              name\n              description\n              defaultVariant {\n                firstImage {\n                  url\n                  variants {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n        upNext {\n          items {\n            path\n            ...storyContent\n          }\n        }\n        story {\n          title\n          body\n          images {\n            url\n            key\n            altText\n            caption\n            focalPoint\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment storyContent on story {\n  title\n  media {\n    image {\n      url\n      variants {\n        url\n        width\n        height\n      }\n    }\n    shoppableImage {\n      url\n      variants {\n        url\n        width\n        height\n      }\n    }\n    video {\n      playlists\n      title\n      thumbnails {\n        url\n        key\n        altText\n        caption\n        focalPoint\n      }\n    }\n  }\n}": types.FetchStoryDocument,
    "query FetchAllStories {\n  browse {\n    category(path: \"/stories\") {\n      hits {\n        title\n        breadcrumbs {\n          path\n          name\n          id\n        }\n        children {\n          hits {\n            id\n            path\n            ... on story {\n              title\n              intro\n              media {\n                image {\n                  url\n                  altText\n                  variants {\n                    url\n                    width\n                    height\n                  }\n                }\n                shoppableImage {\n                  url\n                  altText\n                  variants {\n                    url\n                    width\n                    height\n                  }\n                }\n                video {\n                  thumbnails {\n                    url\n                    altText\n                    variants {\n                      url\n                      width\n                      height\n                    }\n                  }\n                  playlists\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.FetchAllStoriesDocument,
    "fragment image on Image {\n  url\n  altText\n  focalPoint\n  variants {\n    url\n    width\n    height\n  }\n}": types.ImageFragmentDoc,
    "fragment layout on LayoutPiece {\n  displayWidth\n  theme\n  backgroundMedia {\n    image {\n      ...image\n    }\n    video {\n      playlists\n      thumbnails {\n        url\n        altText\n        caption\n        meta\n        focalPoint\n        createAt\n      }\n    }\n  }\n}": types.LayoutFragmentDoc,
    "fragment banner on BannerPiece {\n  title\n  description\n  layout {\n    ...layout\n  }\n  banner {\n    ...image\n  }\n  callToAction {\n    action {\n      label\n      url\n    }\n  }\n}": types.BannerFragmentDoc,
    "fragment featureHighlights on FeatureHighlightsPiece {\n  layout {\n    ...layout\n  }\n  usp {\n    headline\n    description\n    icon {\n      ...image\n    }\n  }\n}": types.FeatureHighlightsFragmentDoc,
    "fragment pictureGrid on PictureGridPiece {\n  title\n  description\n  images {\n    ...image\n  }\n  layout {\n    ...layout\n  }\n}": types.PictureGridFragmentDoc,
    "fragment productSlider on ProductSliderPiece {\n  title\n  description\n  products {\n    variants {\n      sku\n      name\n      defaultPrice: priceVariants(key: \"default\")\n      firstImage {\n        url\n        variants(width: 500, types: [\"avif\"]) {\n          url\n          width\n          height\n        }\n      }\n      product {\n        path\n      }\n    }\n    items {\n      itemId\n    }\n  }\n  layout {\n    ...layout\n  }\n}": types.ProductSliderFragmentDoc,
    "fragment storySlider on StorySliderPiece {\n  title\n  description\n  stories {\n    items {\n      ... on story {\n        path\n        title\n        intro\n        media {\n          image {\n            ...image\n          }\n          shoppableImage {\n            ...image\n          }\n          video {\n            thumbnails {\n              url\n              altText\n              variants {\n                width\n                height\n                url\n              }\n            }\n            title\n            playlists\n          }\n        }\n      }\n    }\n  }\n  layout {\n    ...layout\n  }\n}": types.StorySliderFragmentDoc,
    "fragment blocks on ComponentChoiceComponentForCategoryBlocks {\n  storySlider {\n    ...storySlider\n  }\n  banner {\n    ...banner\n  }\n  featureHighlights {\n    ...featureHighlights\n  }\n  productSlider {\n    ...productSlider\n  }\n  pictureGrid {\n    ...pictureGrid\n  }\n}": types.BlocksFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchLayout {\n  browse {\n    header: menuItem(path: \"/menu/top\") {\n      hits {\n        children {\n          hits {\n            name\n            ... on menuItem {\n              label\n              link {\n                url\n                item {\n                  items {\n                    path\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query FetchLayout {\n  browse {\n    header: menuItem(path: \"/menu/top\") {\n      hits {\n        children {\n          hits {\n            name\n            ... on menuItem {\n              label\n              link {\n                url\n                item {\n                  items {\n                    path\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchProduct($path: String!) {\n  browse {\n    product(path: $path) {\n      hits {\n        name\n        path\n        description(format: json)\n        breadcrumbs(withShortcuts: false) {\n          name\n          path\n        }\n        brand {\n          items {\n            id\n            name\n            ... on brand {\n              component_name\n              logo {\n                url\n                variants(maxWidth: 200) {\n                  url\n                  height\n                  width\n                }\n              }\n            }\n          }\n        }\n        details {\n          title\n          description\n        }\n        story {\n          title\n          body(format: json)\n          images {\n            key\n            url\n            variants {\n              url\n              width\n              height\n            }\n          }\n        }\n        relatedProducts {\n          items {\n            ... on product {\n              path\n              name\n              variants {\n                firstImage {\n                  url\n                  variants(types: [\"avif\"], maxWidth: 100) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n              defaultVariant {\n                defaultPrice\n                firstImage {\n                  url\n                  variants(types: [\"avif\"], maxWidth: 500) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n        variants {\n          name\n          sku\n          priceVariants\n          defaultPrice\n          attributes\n          dimensions {\n            depth\n            depthUnit\n            height\n            heightUnit\n            width\n            widthUnit\n            weight\n            weightUnit\n          }\n          images {\n            url\n            variants(maxWidth: 800, types: [\"avif\"]) {\n              url\n              key\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query FetchProduct($path: String!) {\n  browse {\n    product(path: $path) {\n      hits {\n        name\n        path\n        description(format: json)\n        breadcrumbs(withShortcuts: false) {\n          name\n          path\n        }\n        brand {\n          items {\n            id\n            name\n            ... on brand {\n              component_name\n              logo {\n                url\n                variants(maxWidth: 200) {\n                  url\n                  height\n                  width\n                }\n              }\n            }\n          }\n        }\n        details {\n          title\n          description\n        }\n        story {\n          title\n          body(format: json)\n          images {\n            key\n            url\n            variants {\n              url\n              width\n              height\n            }\n          }\n        }\n        relatedProducts {\n          items {\n            ... on product {\n              path\n              name\n              variants {\n                firstImage {\n                  url\n                  variants(types: [\"avif\"], maxWidth: 100) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n              defaultVariant {\n                defaultPrice\n                firstImage {\n                  url\n                  variants(types: [\"avif\"], maxWidth: 500) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n        variants {\n          name\n          sku\n          priceVariants\n          defaultPrice\n          attributes\n          dimensions {\n            depth\n            depthUnit\n            height\n            heightUnit\n            width\n            widthUnit\n            weight\n            weightUnit\n          }\n          images {\n            url\n            variants(maxWidth: 800, types: [\"avif\"]) {\n              url\n              key\n              width\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchCategory($path: String!) {\n  browse {\n    category(path: $path) {\n      hits {\n        name\n        breadcrumbs {\n          name\n          path\n          id\n        }\n        blocks {\n          ...blocks\n        }\n        children {\n          hits {\n            __typename\n            ... on product {\n              name\n              path\n              description(format: json)\n              defaultVariant {\n                sku\n                defaultPrice: priceVariants(key: \"default\")\n                firstImage {\n                  url\n                  altText\n                  focalPoint\n                  variants(maxWidth: 500, types: [\"avif\"]) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n              variants {\n                sku\n                isDefault\n                name\n                firstImage {\n                  url\n                  altText\n                  focalPoint\n                  variants(maxWidth: 100, types: [\"avif\"]) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query FetchCategory($path: String!) {\n  browse {\n    category(path: $path) {\n      hits {\n        name\n        breadcrumbs {\n          name\n          path\n          id\n        }\n        blocks {\n          ...blocks\n        }\n        children {\n          hits {\n            __typename\n            ... on product {\n              name\n              path\n              description(format: json)\n              defaultVariant {\n                sku\n                defaultPrice: priceVariants(key: \"default\")\n                firstImage {\n                  url\n                  altText\n                  focalPoint\n                  variants(maxWidth: 500, types: [\"avif\"]) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n              variants {\n                sku\n                isDefault\n                name\n                firstImage {\n                  url\n                  altText\n                  focalPoint\n                  variants(maxWidth: 100, types: [\"avif\"]) {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchAllCategories {\n  browse {\n    category(path: \"/products\") {\n      hits {\n        id\n        name\n        breadcrumbs {\n          id\n          name\n          path\n        }\n        blocks {\n          ...blocks\n        }\n        children {\n          hits {\n            id\n            name\n            ... on category {\n              id\n              name\n              path\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query FetchAllCategories {\n  browse {\n    category(path: \"/products\") {\n      hits {\n        id\n        name\n        breadcrumbs {\n          id\n          name\n          path\n        }\n        blocks {\n          ...blocks\n        }\n        children {\n          hits {\n            id\n            name\n            ... on category {\n              id\n              name\n              path\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchLandingPage {\n  browse {\n    landingPage(path: \"/index\") {\n      hits {\n        name\n        blocks {\n          storySlider {\n            ...storySlider\n          }\n          banner {\n            ...banner\n          }\n          featureHighlights {\n            ...featureHighlights\n          }\n          productSlider {\n            ...productSlider\n          }\n          pictureGrid {\n            ...pictureGrid\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query FetchLandingPage {\n  browse {\n    landingPage(path: \"/index\") {\n      hits {\n        name\n        blocks {\n          storySlider {\n            ...storySlider\n          }\n          banner {\n            ...banner\n          }\n          featureHighlights {\n            ...featureHighlights\n          }\n          productSlider {\n            ...productSlider\n          }\n          pictureGrid {\n            ...pictureGrid\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchStory($path: String!) {\n  browse {\n    story(path: $path) {\n      hits {\n        ...storyContent\n        breadcrumbs {\n          path\n          name\n          id\n        }\n        featured {\n          variants {\n            sku\n          }\n          items {\n            path\n            ... on product {\n              name\n              description\n              defaultVariant {\n                firstImage {\n                  url\n                  variants {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n        upNext {\n          items {\n            path\n            ...storyContent\n          }\n        }\n        story {\n          title\n          body\n          images {\n            url\n            key\n            altText\n            caption\n            focalPoint\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment storyContent on story {\n  title\n  media {\n    image {\n      url\n      variants {\n        url\n        width\n        height\n      }\n    }\n    shoppableImage {\n      url\n      variants {\n        url\n        width\n        height\n      }\n    }\n    video {\n      playlists\n      title\n      thumbnails {\n        url\n        key\n        altText\n        caption\n        focalPoint\n      }\n    }\n  }\n}"): (typeof documents)["query FetchStory($path: String!) {\n  browse {\n    story(path: $path) {\n      hits {\n        ...storyContent\n        breadcrumbs {\n          path\n          name\n          id\n        }\n        featured {\n          variants {\n            sku\n          }\n          items {\n            path\n            ... on product {\n              name\n              description\n              defaultVariant {\n                firstImage {\n                  url\n                  variants {\n                    url\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n        upNext {\n          items {\n            path\n            ...storyContent\n          }\n        }\n        story {\n          title\n          body\n          images {\n            url\n            key\n            altText\n            caption\n            focalPoint\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment storyContent on story {\n  title\n  media {\n    image {\n      url\n      variants {\n        url\n        width\n        height\n      }\n    }\n    shoppableImage {\n      url\n      variants {\n        url\n        width\n        height\n      }\n    }\n    video {\n      playlists\n      title\n      thumbnails {\n        url\n        key\n        altText\n        caption\n        focalPoint\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchAllStories {\n  browse {\n    category(path: \"/stories\") {\n      hits {\n        title\n        breadcrumbs {\n          path\n          name\n          id\n        }\n        children {\n          hits {\n            id\n            path\n            ... on story {\n              title\n              intro\n              media {\n                image {\n                  url\n                  altText\n                  variants {\n                    url\n                    width\n                    height\n                  }\n                }\n                shoppableImage {\n                  url\n                  altText\n                  variants {\n                    url\n                    width\n                    height\n                  }\n                }\n                video {\n                  thumbnails {\n                    url\n                    altText\n                    variants {\n                      url\n                      width\n                      height\n                    }\n                  }\n                  playlists\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query FetchAllStories {\n  browse {\n    category(path: \"/stories\") {\n      hits {\n        title\n        breadcrumbs {\n          path\n          name\n          id\n        }\n        children {\n          hits {\n            id\n            path\n            ... on story {\n              title\n              intro\n              media {\n                image {\n                  url\n                  altText\n                  variants {\n                    url\n                    width\n                    height\n                  }\n                }\n                shoppableImage {\n                  url\n                  altText\n                  variants {\n                    url\n                    width\n                    height\n                  }\n                }\n                video {\n                  thumbnails {\n                    url\n                    altText\n                    variants {\n                      url\n                      width\n                      height\n                    }\n                  }\n                  playlists\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment image on Image {\n  url\n  altText\n  focalPoint\n  variants {\n    url\n    width\n    height\n  }\n}"): (typeof documents)["fragment image on Image {\n  url\n  altText\n  focalPoint\n  variants {\n    url\n    width\n    height\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment layout on LayoutPiece {\n  displayWidth\n  theme\n  backgroundMedia {\n    image {\n      ...image\n    }\n    video {\n      playlists\n      thumbnails {\n        url\n        altText\n        caption\n        meta\n        focalPoint\n        createAt\n      }\n    }\n  }\n}"): (typeof documents)["fragment layout on LayoutPiece {\n  displayWidth\n  theme\n  backgroundMedia {\n    image {\n      ...image\n    }\n    video {\n      playlists\n      thumbnails {\n        url\n        altText\n        caption\n        meta\n        focalPoint\n        createAt\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment banner on BannerPiece {\n  title\n  description\n  layout {\n    ...layout\n  }\n  banner {\n    ...image\n  }\n  callToAction {\n    action {\n      label\n      url\n    }\n  }\n}"): (typeof documents)["fragment banner on BannerPiece {\n  title\n  description\n  layout {\n    ...layout\n  }\n  banner {\n    ...image\n  }\n  callToAction {\n    action {\n      label\n      url\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment featureHighlights on FeatureHighlightsPiece {\n  layout {\n    ...layout\n  }\n  usp {\n    headline\n    description\n    icon {\n      ...image\n    }\n  }\n}"): (typeof documents)["fragment featureHighlights on FeatureHighlightsPiece {\n  layout {\n    ...layout\n  }\n  usp {\n    headline\n    description\n    icon {\n      ...image\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment pictureGrid on PictureGridPiece {\n  title\n  description\n  images {\n    ...image\n  }\n  layout {\n    ...layout\n  }\n}"): (typeof documents)["fragment pictureGrid on PictureGridPiece {\n  title\n  description\n  images {\n    ...image\n  }\n  layout {\n    ...layout\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment productSlider on ProductSliderPiece {\n  title\n  description\n  products {\n    variants {\n      sku\n      name\n      defaultPrice: priceVariants(key: \"default\")\n      firstImage {\n        url\n        variants(width: 500, types: [\"avif\"]) {\n          url\n          width\n          height\n        }\n      }\n      product {\n        path\n      }\n    }\n    items {\n      itemId\n    }\n  }\n  layout {\n    ...layout\n  }\n}"): (typeof documents)["fragment productSlider on ProductSliderPiece {\n  title\n  description\n  products {\n    variants {\n      sku\n      name\n      defaultPrice: priceVariants(key: \"default\")\n      firstImage {\n        url\n        variants(width: 500, types: [\"avif\"]) {\n          url\n          width\n          height\n        }\n      }\n      product {\n        path\n      }\n    }\n    items {\n      itemId\n    }\n  }\n  layout {\n    ...layout\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment storySlider on StorySliderPiece {\n  title\n  description\n  stories {\n    items {\n      ... on story {\n        path\n        title\n        intro\n        media {\n          image {\n            ...image\n          }\n          shoppableImage {\n            ...image\n          }\n          video {\n            thumbnails {\n              url\n              altText\n              variants {\n                width\n                height\n                url\n              }\n            }\n            title\n            playlists\n          }\n        }\n      }\n    }\n  }\n  layout {\n    ...layout\n  }\n}"): (typeof documents)["fragment storySlider on StorySliderPiece {\n  title\n  description\n  stories {\n    items {\n      ... on story {\n        path\n        title\n        intro\n        media {\n          image {\n            ...image\n          }\n          shoppableImage {\n            ...image\n          }\n          video {\n            thumbnails {\n              url\n              altText\n              variants {\n                width\n                height\n                url\n              }\n            }\n            title\n            playlists\n          }\n        }\n      }\n    }\n  }\n  layout {\n    ...layout\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment blocks on ComponentChoiceComponentForCategoryBlocks {\n  storySlider {\n    ...storySlider\n  }\n  banner {\n    ...banner\n  }\n  featureHighlights {\n    ...featureHighlights\n  }\n  productSlider {\n    ...productSlider\n  }\n  pictureGrid {\n    ...pictureGrid\n  }\n}"): (typeof documents)["fragment blocks on ComponentChoiceComponentForCategoryBlocks {\n  storySlider {\n    ...storySlider\n  }\n  banner {\n    ...banner\n  }\n  featureHighlights {\n    ...featureHighlights\n  }\n  productSlider {\n    ...productSlider\n  }\n  pictureGrid {\n    ...pictureGrid\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;