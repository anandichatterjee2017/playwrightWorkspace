# GreenKart Test Plan

## Application Overview

Test plan for the GreenKart e-commerce application, which allows users to browse and purchase vegetables and fruits.

## Test Scenarios

### 1. Product Search and Add to Cart

**Seed:** `tests/seed.spec.ts`

#### 1.1. Search for a product

**File:** `tests/search_product.spec.ts`

**Steps:**
  1. Type 'Tomato' in the search bar.
    - expect: The product list should display only 'Tomato - 1 Kg'.
  2. Clear the search bar.
    - expect: The product list should display all products.

#### 1.2. Add product to cart

**File:** `tests/add_to_cart.spec.ts`

**Steps:**
  1. Click the '+' button next to 'Tomato - 1 Kg' to increase quantity to 2.
    - expect: The quantity for 'Tomato - 1 Kg' should be updated to 2.
  2. Click the 'ADD TO CART' button for 'Tomato - 1 Kg'.
    - expect: The cart summary should update to show 2 items and the correct total price.

### 2. Cart Operations

**Seed:** `tests/seed.spec.ts`

#### 2.1. View cart details

**File:** `tests/view_cart.spec.ts`

**Steps:**
  1. Click on the 'Cart' link.
    - expect: The cart page should display all added products with their quantities and prices.

#### 2.2. Update product quantity in cart

**File:** `tests.update_cart.spec.ts`

**Steps:**
  1. Increase the quantity of 'Tomato - 1 Kg' in the cart to 3.
    - expect: The total price should update accordingly.
  2. Remove 'Tomato - 1 Kg' from the cart.
    - expect: The cart should no longer display 'Tomato - 1 Kg'.
