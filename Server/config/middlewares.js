module.exports = ({ env }) => [
  'strapi::errors',
   {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', `https://${env('AWS_BUCKET')}.s3.amazonaws.com`],
          'media-src': ["'self'", 'data:', 'blob:', `https://${env('AWS_BUCKET')}.s3.amazonaws.com`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      formLimit: "1000mb", 
      jsonLimit: "1000mb", 
      textLimit: "1000mb", 
      formidable: {
        maxFileSize: 10737418240,
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
