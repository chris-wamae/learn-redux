<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
        }

        #top-navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #FF6C37;
            padding-top: 28px;
            color: #fff;
            position: fixed;
            width: 100%;
            height: 44px;
            z-index: 10;
        }

        #top-navbar a {
            color: #fff;
            margin-left: 10px;
        }

        #navbar {
            width: 15%;
            height: calc(100vh - 72px);
            position: fixed;
            background: #f4f4f4;
            overflow: auto;
            margin-top: 72px;
        }

        #navbar ul {
            list-style: none;
            padding: 0;
        }

        #navbar ul li a {
            text-decoration: none;
            color: #000;
            display: block;
            padding: 10px;
        }

        #main-doc {
            margin-left: 18%;
            margin-right: 5%;
            padding: 20px;
            margin-top: 72px;
            flex-grow: 1;
        }

        #main-doc h2 {
            color: #FF6C37;
        }

        #main-doc p {
            line-height: 1.6;
        }

        #main-doc pre {
        /* padding: 20px; */
        background-color: #f3f8ff;
        border: 1px solid #ddd;
        border-left: 3px solid #d65a29;
        color: #666;
        page-break-inside: avoid;
        font-family: 'Courier New', monospace;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        max-width: 400rem; 
        min-width: 300px; 
        overflow: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        border-radius: 3px;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
        margin-left: 20px;
        margin-right: 60px;
        padding-right: 20px;
    }

    #main-doc pre > code {
        display: block;
        padding: 0 .5em;
        color: #333;
        line-height: 1.6;
        background-color: inherit;
    }

    #main-doc pre > code > strong {
        color: #d65a29;
        font-weight: bold;
    }
    </style>
</head>

<body>
  <nav id="top-navbar">
      <div></div>
      <div><h1>Pesapal API Consumer</h1></div>
      <div>
          <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a>
      </div>
  </nav>

  <nav id="navbar">
      <ul>
          <li><a href="#Introduction">Introduction</a></li>
          <li><a href="#Chapter1">Setting Up</a></li>
          <li><a href="#Chapter2">Authentication</a></li>
          <li><a href="#Chapter3">IPN Registration</a></li>
          <li><a href="#Chapter4">Obtaining the Iframe URL</a></li>
      </ul>
  </nav>

    <main id="main-doc">
        <section id="Introduction">
            <h2>Introduction</h2>
            <p>Welcome to the documentation for my project on consuming the Pesapal API and implementing JWT authentication. In this project, I set out to integrate the Pesapal API into my Rails application to obtain an iframe URL for payment processing. Additionally, I implemented JSON Web Token (JWT) authentication to secure the API requests.

              <br><br>To accomplish this, I started by thoroughly understanding the requirements of the task and conducting research on the Pesapal API documentation. This allowed me to gather the necessary information and familiarize myself with the endpoints, request/response formats, and authentication mechanisms.
              
              With a solid understanding of the Pesapal API, I proceeded to set up my Rails application, configuring the required gems, database, routes, and controllers. <br><br>Next, I implemented JWT authentication, which involved configuring the authentication mechanism, generating JWT tokens upon successful user authentication, and securing the API endpoints using the JWT authentication middleware.
              
              Once the authentication was in place, I focused on consuming the Pesapal API. I crafted HTTP requests to the appropriate API endpoints, ensuring the inclusion of the required parameters. I diligently handled the API responses, and returning the iframe URL as one of the response properties that would enable me to embed the Pesapal payment interface seamlessly into my application, if I wanted to.<br><br>
              
              Throughout the development process, I conducted thorough testing and troubleshooting to verify the functionality. I paid close attention to the API request and response handling, error management, and overall system stability.<br>
              
              <br>By the end of the project, I successfully accomplished my goal of consuming the Pesapal API to retrieve the iframe URL and implemented JWT authentication to secure the API requests. This documentation aims to provide you with insights into the implementation details, API integration steps, and any important considerations for further development or maintenance.
              
              Let's dive into the documentation to explore the key aspects of the project and discover how you can leverage it for your own applications.</p>
        </section>

        <section id="Setting Up">
          <h2>Setting Up the Project Environment</h2>
          <p>Install the necessary dependencies and libraries. Configure the environment variables and project settings. Set up the database and migrations. Refer to the GitHub README.md here for instructions</p>
      </section>
      
      <section id="Chapter2">
          <h2>Step 2: Authentication Implementation</h2>
          <pre>
              <code>
                  <strong>POST /pesapal/authorization</strong>
                  <strong>Request Headers:</strong>
                  Content-Type: application/json
                  Accept: application/json
      
                  <strong>Example Request:</strong>
                  <pre>
                      <code>
                          require "uri"
                          require "json"
                          require "net/http"
      
                          url = URI("https://rails-7fex.onrender.com/pesapal/authorization")
      
                          https = Net::HTTP.new(url.host, url.port)
                          https.use_ssl = true
      
                          request = Net::HTTP::Post.new(url)
                          request["Content-Type"] = "application/json"
                          request["Accept"] = "application/json"
      
                          response = https.request(request)
                          puts response.read_body
                      </code>
                  </pre>
      
                  <strong>Example Response:</strong>
                  <pre>
                      <code>
                          {
                              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                              "expiryDate": "2023-05-23T22:35:55.5225452Z",
                              "error": null,
                              "status": "200",
                              "message": "Request processed successfully"
                          }
                      </code>
                  </pre>
              </code>
          </pre>
      </section>
      
      <section id="Chapter3">
          <h2>Step 3: IPN Registration</h2>
          <pre>
              <code>
                  <strong>POST /pesapal/register_ipn</strong>
                  <strong>Request Headers:</strong>
                  Content-Type: application/json
                  Accept: application/json
      
                  <strong>Example Request:</strong>
                  <pre>
                      <code>
                          require "uri"
                          require "json"
                          require "net/http"
      
                          url = URI("https://rails-7fex.onrender.com/pesapal/register_ipn")
      
                          https = Net::HTTP.new(url.host, url.port)
                          https.use_ssl = true
      
                          request = Net::HTTP::Post.new(url)
                          request["Content-Type"] = "application/json"
                          request["Accept"] = "application/json"
                          request.body = JSON.dump({
                              "url": "https://www.moringaschool.com/ipn"
                          })
      
                          response = https.request(request)
                          puts response.read_body
                      </code>
                  </pre>
      
                  <strong>Example Response:</strong>
                  <pre>
                      <code>
                          {
                              "id": 9788,
                              "url": "https://www.moringaschool.com/ipn",
                              "created_date": "2023-05-23T11:24:39.45",
                              "ipn_id": "927423d4-926d-4a3e-b1b6-dea1e00648b9",
                              "notification_type": 0,
                              "ipn_notification_type_description": "GET",
                              "ipn_status": 1,
                              "ipn_status_decription": "Active",
                              "error": null,
                              "status": "200"
                          }
                      </code>
                  </pre>
              </code>
          </pre>
      </section>
      
      <section id="Chapter4">
          <h2>Step 4: Submit Order Request - Iframe URL</h2>
          <pre>
              <code>
                  <strong>POST /pesapal/iframe</strong>
                  <strong>Request Headers:</strong>
                  Content-Type: application/json
                  Accept: application/json
                  <strong>Example Request:</strong>
                  <pre>
                      <code>
                          require "uri"
                          require "json"
                          require "net/http"
                          
                          url = URI("https://rails-7fex.onrender.com/pesapal/iframe")
                          
                          https = Net::HTTP.new(url.host, url.port)
                          https.use_ssl = true
                          
                          request = Net::HTTP::Post.new(url)
                          request["Content-Type"] = "application/json"
                          request["Accept"] = "application/json"
                          request.body = JSON.dump({
                              "id": "9788",
                              "currency": "KES",
                              "amount": 100,
                              "description": "Payment description goes here",
                              "callback_url": "https://4d0a-41-90-179-83.ngrok-free.app/pesapal/callback",
                              "notification_id": "927423d4-926d-4a3e-b1b6-dea1e00648b9",
                              "billing_address": {
                                  "email_address": "john.doe@example.com",
                                  "phone_number": "0700100100",
                                  "country_code": "254",
                                  "first_name": "John",
                                  "middle_name": "",
                                  "last_name": "Doe",
                                  "line_1": "Random Street",
                                  "line_2": "",
                                  "city": "Nairobi",
                                  "state": "Nairobi",
                                  "postal_code": "00100",
                                  "zip_code": "00100"
                              }
                          })
                          
                          response = https.request(request)
                          puts response.read_body
                      </code>
                  </pre>
      
                  <strong>Example Response:</strong>
                  <pre>
                      <code>
                          {
                              "order_tracking_id": "f8b4c4f0-ce5b-413a-bac8-dea1f671cd93",
                              "merchant_reference": "9788",
                              "redirect_url": "https://pay.pesapal.com/iframe/PesapalIframe3/Index?OrderTrackingId=f8b4c4f0-ce5b-413a-bac8-dea1f671cd93",
                              "error": null,
                              "status": "200"
                          }
                      </code>
                  </pre>
              </code>
          </pre>
      </section>
      
    </main>
</body>

</html>