
import re
from playwright.sync_api import Page, expect

def test_voting_feature(page: Page):
    # Navigate to the page
    page.goto("http://127.0.0.1:8080/")

    # Click the "Join Us" button to open the registration dialog
    page.get_by_role("button", name="Join Us").click()

    # Fill out the registration form
    page.get_by_label("Name").fill("Test User")
    page.get_by_label("Age").fill("25")
    page.get_by_label("Male").check()
    page.get_by_label("Email ID").fill("test.user@example.com")
    page.get_by_label("Mobile Number").fill("1234567890")
    page.get_by_label("State").locator("button").click()
    page.get_by_role("option", name="Delhi").click()
    page.get_by_label("District").fill("New Delhi")
    page.get_by_label("Student?").locator("text=Yes").click()
    page.get_by_label("Academic Category").locator("button").click()
    page.get_by_role("option", name="Other").click()
    page.get_by_label("Working Professional?").locator("text=No").click()

    # Interests & Engagement
    page.get_by_label("How did you hear about We The Youth?").locator("button").click()
    page.get_by_role("option", name="Social Media").click()
    page.get_by_label("Role you’d like to take").locator("button").click()
    page.get_by_role("option", name="Member").click()

    # Skills & Time Commitment
    page.get_by_label("What skills can you contribute?").locator("text=Other").click()
    page.get_by_label("How many hours per week can you commit?").locator("button").click()
    page.get_by_role("option", name="2–5 hours").click()

    # Motivation
    page.get_by_label("What is one change you wish to see in India?").fill("More opportunities for youth.")
    page.get_by_label("Why do you want to join this movement?").fill("To make a difference.")

    # Consent & Confirmation
    page.get_by_label("Would you like to opt-in to a WhatsApp/ Telegram group?").locator("text=Yes").click()
    page.get_by_label("Are you politically active?").locator("text=No").click()
    page.get_by_label("I agree to receive updates and participate in youth activities.").check()

    # Submit the form
    page.get_by_role("button", name="Submit").click()

    # Wait for the toast message to appear and disappear
    expect(page.get_by_text("Success!")).to_be_visible()

    # Select a priority to vote for
    page.get_by_text("Urban Futures").click()

    # Check if the "Vote for Your Top Priorities" button is enabled
    vote_button = page.get_by_role("button", name="Vote for Your Top Priorities")
    expect(vote_button).to_be_enabled()

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/voting_feature.png")
