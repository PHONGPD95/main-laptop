import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

const imgTypes = {
  'image/jpeg': [],
  'image/png': [],
  'image/gif': [],
  'image/bmp': [],
  'image/webp': [],
  'image/svg+xml': [],
};

const docTypes = {
  'application/pdf': [],
  'application/msword': [],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
  'application/vnd.ms-excel': [],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [],
};

interface Props {
  className?: string;
  wrapperClass?: string;
  type?: 'image' | 'doc';
  multiple?: boolean;
  onChange: (files: File[]) => void;
}

const DropFiles = ({
  wrapperClass,
  type = 'image',
  multiple = false,
  children,
  onChange,
}: PropsWithChildren<Props>) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: type === 'image' ? { ...imgTypes } : { ...docTypes },
    multiple: multiple,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onChange(acceptedFiles);
      } else {
        toast.error('File type not supported');
      }
    },
  });

  return (
    <div {...getRootProps()} className={classNames(`${wrapperClass} cursor-pointer`, { activeClass: isDragActive })}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
};

export default DropFiles;
