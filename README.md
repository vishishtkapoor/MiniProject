# OTP Generation and Authentication Service

This is a simple OTP (One-Time Password) generation and authentication service built using Node.js, Express, and Nodemailer. It generates a 6-digit numeric OTP, sends it via email, and then allows the user to authenticate the OTP.

## Technologies Used

- **Express**: A minimal and flexible Node.js web application framework for building APIs.
- **Nodemailer**: A module for Node.js applications to easily send emails.
- **Body-Parser**: Middleware for parsing incoming request bodies in a middleware before your handlers.
- **Randomstring**: A utility for generating random strings, used here to create OTPs.

## Setup

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/otp-service.git
    cd otp-service
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Replace the email configuration in the `transporter` setup with your own email and password.

    ```javascript
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });
    ```

### Running the Service

1. Start the server:

    ```bash
    node server.js
    ```

2. The service will be running at `http://localhost:3000`.

## API Endpoints

### 1. Generate OTP

- **URL**: `/generate-otp`
- **Method**: `GET`
- **Description**: Generates a 6-digit numeric OTP and sends it via email.

### 2. Authenticate OTP

- **URL**: `/authenticate-otp`
- **Method**: `GET`
- **Query Parameters**:
    - `input` (required): The OTP provided by the user.
- **Description**: Authenticates the input OTP against the generated OTP.

## Example Usage

1. **Generate OTP**:
   - Send a GET request to `/generate-otp`.
   - You will receive the OTP via email.

2. **Authenticate OTP**:
   - Send a GET request to `/authenticate-otp?input=<your_otp>`.
   - The response will indicate whether authentication was successful or not.

## Note

- This project uses a dummy database (an in-memory object) to store the OTP. For a production environment, consider using a persistent database like MongoDB.

## License

This project is licensed under the MIT License. Feel free to use and modify the code per the license terms.
