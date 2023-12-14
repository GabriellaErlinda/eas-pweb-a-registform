import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Pendaftaran = {
  slug: 'Pendaftaran',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true,
      unique : true
    },
    {
      name: 'Tempat_Lahir',
      label: 'Tempat_Lahir',
      type: 'date',
      required: true,
    },
    {
      name: 'Asal-Sekolah',
      label: 'Asal Sekolah',
      type: 'text',
      required: true,
    },
    {
      name: 'Gender',
      type: 'radio',
      options: [
        {
            label: 'Laki-laki',
            value: 'Laki-laki',
        },
        {
            label: 'Perempuan',
            value: 'Perempuan',
        },
      ],
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'radio',
      options: [
        {
            label: 'Waiting',
            value: 'Waiting',
        },
        {
            label: 'Rejected',
            value: 'Rejected',
        },
        {
          label: 'Accepted',
          value: 'Accepted',
        },
      ],
      defaultValue: 'Waiting',
      required: true,
    },
    {
      name: 'Tanggal_Pendaftaran',
      label: 'Tanggal_Pendaftaran',
      type: 'date',
      required: true,
    },
  ],
};

export default Pendaftaran;
