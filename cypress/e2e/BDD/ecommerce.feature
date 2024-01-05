Feature: E2E ecommerce validation

    application regression

    Scenario: Ecommerce product delivery
        Given I open Ecommerce Page
        When I add items to cart
        And Validate the total prices
        Then select the country submit  adn verify Thankyou
# Attention Rule or convention when you create a dot feature file ecommerce it will be search for a folder with the same folder name ecommerce